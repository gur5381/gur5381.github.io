export default function H3(text) {
    const h3 = document.createElement('h3');
    h3.innerText = text;
    h3.style.margin = "30px 0 10px";
    return h3;
}