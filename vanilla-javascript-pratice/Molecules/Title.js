import H3 from '../Atoms/H3.js';

export default function Title(name) {
    const title = document.createElement('div');
    title.style.width = '400px';
    title.style.color = '#333333';
    title.style.fontSize = '15px';
    title.style.fontStyle = 'bold';
    title.style.borderBottom = 'solid';
    const h3 = H3(name);
    title.appendChild(h3);
    return title;
}