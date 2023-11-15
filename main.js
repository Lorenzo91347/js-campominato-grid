'use strict'

function createElement(tag, cellClass, content) {
    const element = document.createElement(tag);
    element.classList.add(cellClass);
    element.append(content);
    return element;

}

const board = document.querySelector('.board');

for (let i = 1; i <= 100; i++) {
    const myElement = createElement('div', 'cell', i)
    board.append(myElement);
}