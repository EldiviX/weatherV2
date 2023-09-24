export { showList }
import { arrList } from "./main.js";
import { get } from "./render.js";

const likedList = document.querySelector('.liked_list');

function showList(arrList) {
    arrList.forEach(createListElementBlock)
}

function createListElementBlock(item) {
    const otherBlock = document.createElement('div');
    otherBlock.setAttribute('class', 'other_block')

    // const textBlock = document.createElement('div');
    // textBlock.setAttribute('class', '')

    const block = document.createElement('div');
    block.setAttribute('class','list_elem');
    block.setAttribute('id',item.id);
    block.innerText = item.name;
    block.addEventListener('click', () => {
        get(item.name)
    })

    const img = document.createElement('img');
    img.setAttribute('class', 'img_close');
    img.setAttribute('src', 'close.png');
    img.addEventListener('click', event => {
        event.stopPropagation();

        const st = item.id 
        const targetItem = arrList.findIndex(item => item.id === st)
        arrList.splice(targetItem, 1);

        event.target.closest('div').remove();
    });

    block.appendChild(img);
    otherBlock.appendChild(block)
    likedList.appendChild(otherBlock)

}