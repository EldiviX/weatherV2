export { showList }
import { arrList } from "./main.js";

const likedList = document.querySelector('.liked_list');

function showList(arrList) {
    arrList.forEach(createListElementBlock)
}

function createListElementBlock(item) {
    const block = document.createElement('div');
    block.setAttribute('class','list_elem');
    block.setAttribute('id',item.id);
    block.innerText = item.name;

    const img = document.createElement('img');
    img.setAttribute('class', 'img_close');
    img.setAttribute('src', 'close.png');
    img.addEventListener('click', event => {
        const st = item.id 
        const targetItem = arrList.findIndex(item => item.id === st)
        arrList.splice(targetItem, 1);

        event.target.closest('div').remove();
    });

    block.appendChild(img);
    likedList.appendChild(block)

}