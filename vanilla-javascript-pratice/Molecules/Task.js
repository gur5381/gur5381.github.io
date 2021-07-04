import Checkbox from '../Atoms/CheckBox.js';
import Button from '../Atoms/Button.js';
import TextField from '../Atoms/TextField.js';

export default function Task(isAdded = false, name = '') {
    const task = document.createElement('div');
    const textField = isAdded ? TextField(name, '226px') : TextField();
    let isTextFieldEnabled = true;

    task.style.height = '41px';
    task.style.width = '400px';
    task.style.padding = '20px 0';

    function onCheckboxClick(isChecked) {
        if(isChecked) {
            textField.style.textDecorationLine = 'line-through';
            textField.style.color = '#888';
            document.getElementById('complete').appendChild(task);
        }
        else{
            textField.style.textDecorationLine = 'none';
            textField.style.color = '#333';
            document.getElementById('todo').appendChild(task);
        } 
    }
    function onDeleteButtonClick() {
        task.remove();
    }

    function onEditButtonClick() {
        if(isTextFieldEnabled) textField.enable();
        else textField.disable();
        isTextFieldEnabled = !isTextFieldEnabled;
    }

    function onAddButtonClick() {
        document.getElementById('todo').appendChild(Task(true, textField.value));
        textField.value = '';
    }

    //A Task added to TODO or COMPLETED list
    if(isAdded){
        textField.disable();
        const checkbox = Checkbox(onCheckboxClick);
        const editButton = Button('Edit', onEditButtonClick);
        const deleteButton = Button('Delete', onDeleteButtonClick, '#CF2323');
        task.appendChild(checkbox);
        task.appendChild(textField);
        task.appendChild(editButton);
        task.appendChild(deleteButton);
        task.style.borderBottom = '1px solid #eee';
    }
    //A Task under ADD ITEM section
    else {
        const addButton = Button('Add', onAddButtonClick);
        task.appendChild(textField);
        task.appendChild(addButton);

    }
    return task;
}