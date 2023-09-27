import { arr } from "./render.js";
// import { get } from "./render.js";

const buttonTabNow = document.querySelector('.tabs_now');
const buttonTabDetail = document.querySelector('.tabs_details');

let visible1 = true;
let visible2 = false;

function check2() {
    if (!visible2) {
        createTab();
        
        visible1 = false;
        visible2 = true;
    }
}

function check1() {
    if (!visible1) {
        removeTab();

        visible1 = true;
        visible2 = false;
    }
}

function createTab() {
    const buttonTabNow = document.querySelector('.tabs_now');
    const buttonTabDetail = document.querySelector('.tabs_details');
    const nowTab = document.getElementById('nowTab');
    const blockMain = document.querySelector('.block_main');
    const blockLiked = document.querySelector('.block_liked');

    blockMain.style.display = 'none';
    blockLiked.style.display = 'none';

    const mainBlock = document.createElement('div');
    mainBlock.setAttribute('class', 'block_detail');
    const otherBlock = document.createElement('div');
    otherBlock.setAttribute('class', 'block_detail_other');
    nowTab.insertAdjacentElement('beforeend', mainBlock);
    nowTab.insertAdjacentElement('beforeend', otherBlock);

    buttonTabDetail.classList.add('shadow');
    buttonTabNow.classList.remove('shadow');
    createFiller()
}

function removeTab() {
    const buttonTabNow = document.querySelector('.tabs_now');
    const buttonTabDetail = document.querySelector('.tabs_details');

    const blockMain = document.querySelector('.block_main');
    const blockLiked = document.querySelector('.block_liked');

    const mainBlock = document.querySelector('.block_detail');
    const otherBlock = document.querySelector('.block_detail_other')
    mainBlock.remove();
    otherBlock.remove();

    blockMain.style.display = 'block';
    blockLiked.style.display = 'block';

    buttonTabNow.classList.add('shadow');
    buttonTabDetail.classList.remove('shadow');
}

function createFiller() {
    const detailOther = document.querySelector('.block_detail_other');
    
    for (let i = 0; i < 3; i++) {
        const timeBlock = document.createElement('div');
        timeBlock.setAttribute('class', 'time_block');
        const timeBlockH15 = document.createElement('div');
        timeBlockH15.classList.add('time_block_h')
        const timeBlockT = document.createElement('div');
        timeBlockT.classList.add('time_block_t')
        const timeBlockTTemp = document.createElement('div');
        const timeBlockTFell = document.createElement('div');
        const timeBlockP = document.createElement('div');
        timeBlockP.classList.add('time_block_dp')
        const pic = document.createElement('img');
        pic.classList.add('time_block_p')
        pic.setAttribute('src', `https://openweathermap.org/img/wn/${arr.list[0].weather[0].icon}@4x.png`);

        const dateTimeString = arr.list[i].dt_txt;
        const dateTime = new Date(dateTimeString);
        const hours = dateTime.getHours();
        const minutes = dateTime.getMinutes();
        const timeString = `${hours}:${minutes}0`;
        timeBlockH15.innerText = timeString;
        
        timeBlockTTemp.innerText = `Temperature: ${arr.list[i].main.temp.toFixed()}`;
        timeBlockTFell.innerText = `Feels like: ${arr.list[i].main.feels_like}`;
        
        timeBlock.insertAdjacentElement('beforeend', timeBlockH15);
        timeBlock.insertAdjacentElement('beforeend', timeBlockT);
        timeBlockP.insertAdjacentElement('beforeend', pic);
        timeBlock.insertAdjacentElement('beforeend', timeBlockP);
        timeBlockT.insertAdjacentElement('beforeend', timeBlockTTemp);
        timeBlockT.insertAdjacentElement('beforeend', timeBlockTFell);
        detailOther.insertAdjacentElement('beforeend', timeBlock);
    }


}

export {visible1, visible2, createTab, removeTab, check1, check2}

buttonTabDetail.addEventListener('click', check2);
buttonTabNow.addEventListener('click', check1);