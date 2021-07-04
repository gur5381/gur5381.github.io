import Task from '../Molecules/Task.js';
import Section from '../Molecules/Section.js';


export default function AddItemSection() {
    const section = Section('addItem', 'ADD ITEM');
    const task = Task();
    section.appendChild(task);
    return section;
};