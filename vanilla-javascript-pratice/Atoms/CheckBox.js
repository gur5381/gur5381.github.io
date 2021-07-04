export default function CheckBox (onclick) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = false;
    checkbox.onclick = () => onclick(checkbox.checked);
    checkbox.style.margin = '0 10px'
    return checkbox;
}