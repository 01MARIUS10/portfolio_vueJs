//animation codepen
async function init(node, node2, el) {
    await sleep(1000);
    node.innerText = "";
    await node.type(el.first);

    node2.innerText = "";
    await node2.type(" ");

    while (true) {
        await node.type(el.text1);
        await sleep(1000);
        await node2.type(el.text2);
        await sleep(2000);
        await node2.delete(el.text2);
        await node.delete(`${el.first}${el.text1}`);
    }
}

// Source code 🚩
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
class TypeAsync extends HTMLSpanElement {
    get typeInterval() {
        const randomMs = 100 * Math.random();
        return randomMs < 50 ? 10 : randomMs;
    }

    async type(text) {
        for (let character of text) {
            this.innerText += character;
            await sleep(this.typeInterval);
        }
    }

    async delete(text) {
        for (let character of text) {
            this.innerText = this.innerText.slice(0, this.innerText.length - 1);
            await sleep(this.typeInterval);
        }
    }
}

customElements.define("type-async", TypeAsync, { extends: "span" });

export { init };
