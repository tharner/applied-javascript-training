import {ColorHome} from './color-home.js';


window.customElements.define('color-home', ColorHome);

let colors = ["red","green","blue"]

const deleteColor = color => {
    colors = colors.filter(c => c !== color);
    const colorHome = document.querySelector('color-home');
    colorHome.colors = colors;
};

window.addEventListener('DOMContentLoaded', () => {

    const colorHome = document.querySelector("color-home")
    colorHome.colors = colors;
    colorHome.onDeleteColor = deleteColor;

    /*setTimeout(()=> {
        // immutable programming creates a new copy of the array that goes to the setter (if you change existing one it wont trigger - same reference)
        colors = [ ...colors,'yellow' ]; // copying the array and appending new item
        colorHome.colors = colors;

    },2000);*/

})