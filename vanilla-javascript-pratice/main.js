import AddItemSection from './Organisms/AddItemSection.js'
import ToDoListSection from './Organisms/ToDoListSection.js'
import CompleteListSection from './Organisms/CompleteListSection.js'

const app = document.querySelector("#App");
const addItemSection = AddItemSection();
const toDoListSection = ToDoListSection();
const completeListSection = CompleteListSection();
app.appendChild(addItemSection);
app.appendChild(toDoListSection);
app.appendChild(completeListSection);
