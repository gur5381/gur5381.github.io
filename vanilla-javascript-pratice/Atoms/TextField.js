export default function TextField(value = '', width = '318px') {
    const textField = document.createElement('input');
    textField.type = 'text';
    textField.value = value;
    textField.style.width = width;
    textField.style.height = '18px';
    textField.style.padding = '10px';
    textField.style.border = '1px solid #ddd';
    textField.style.borderRadius = '6px';
    textField.style.fontSize = '18px';
    textField.style.color = '#888';
    textField.onfocus = () => textField.style.color = '#333';
    textField.onblur = () => textField.style.color = '#888';
    
    textField.disable = () => {
        textField.disabled = true;
        textField.style.border = 'none';
        textField.style.color = '#333';
    
    }
    textField.enable = () => {
        textField.disabled = false;
        textField.style.border = '1px solid #ddd';
        textField.style.color = '#888';
    }
    return textField;
}