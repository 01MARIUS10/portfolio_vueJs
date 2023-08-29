// navigation.js
import { ref, onMounted, onUnmounted } from "vue";

export function useTrackNavigation(elementsIds) {
    // state encapsulated and managed by the composable
    const currentSection = ref(0);
    let previousPosition = ref(window.scrollY);

    let sum = 0;
    let scrollTop = ref(document.documentElement.scrollTop);
    let scrollHeight = ref(document.documentElement.scrollHeight);
    let clientHeight = ref(document.documentElement.clientHeight);

    const elements = elementsIds.map((e) => document.querySelector(`#${e}`));

    //get the scrollTop for all elements
    const itemIntervall = elements.map((value) => {
        sum += value.clientHeight;
        return sum;
    });

    const monter = () => {
        return window.scrollY > previousPosition.value;
    };
    const descendre = () => {
        return window.scrollY < previousPosition.value;
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                    currentSection.value = elements.indexOf(element);
                    previousPosition.value = scrollTop;
                }
            });
        },
        {
            threshold: 0.1,
        }
    );
    elements.forEach((element) => {
        observer.observe(element);
    });
    function sc() {
        // console.log(scrollTop.value, scrollHeight.value, clientHeight.value);
        if (
            scrollTop.value > document.documentElement.scrollTop &&
            currentSection.value == elements.length - 1
        ) {
            elements[elements.length - 2].scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
            currentSection.value = elements.length - 2;
        }
        scrollTop.value = document.documentElement.scrollTop;
        scrollHeight.value = document.documentElement.scrollHeight;
        clientHeight.value = document.documentElement.clientHeight;
        if (-clientHeight.value + scrollHeight.value == scrollHeight) {
            currentSection.value = elements.length - 1;
        }
    }
    window.addEventListener("scroll", sc);

    // expose managed state as return value
    return { currentSection };
}
