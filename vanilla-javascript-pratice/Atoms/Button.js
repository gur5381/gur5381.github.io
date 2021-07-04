export default function Button(text, onclick, overColor = '#333') {
    const button = document.createElement('input');
    button.type = 'button';
    button.value = text;

    button.style.background = 'none';
    button.style.border = 'none';
    button.style.color = '#888';
    button.style.fontSize = '15px';
    button.style.width = '60px';
    button.style.margin = '10px 0 0';

    button.onmouseover = () => button.style.color = overColor;
    button.onmouseleave = () => button.style.color = '#888';
    button.onclick = onclick;
    
    return button;
}