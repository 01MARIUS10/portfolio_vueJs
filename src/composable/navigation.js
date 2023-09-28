// navigation.js
import { ref, computed, onMounted, onUnmounted } from "vue";

export function useTrackNavigation(elementsIds) {
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
    const blockScroll = computed(() => {
        return currentSection.value == 3 ? "end" : "start";
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
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

    return { currentSection };
}
