import Title from './Title.js';

export default function Section(id, title) {
    const section = document.createElement('div');
    section.id = id;
    section.appendChild(Title(title)); 
    return section;
};