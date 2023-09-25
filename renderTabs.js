const buttonTabNow = document.querySelector('.tabs_now');
const buttonTabDetail = document.querySelector('.tabs_details');
const nowTab = document.getElementById('nowTab');

const blockMain = document.querySelector('.block_main');
const blockLiked = document.querySelector('.block_liked');

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

}

function removeTab() {
    const mainBlock = document.querySelector('.block_detail');
    const otherBlock = document.querySelector('.block_detail_other')
    mainBlock.remove();
    otherBlock.remove();

    blockMain.style.display = 'block';
    blockLiked.style.display = 'block';

    buttonTabNow.classList.add('shadow');
    buttonTabDetail.classList.remove('shadow');
}

buttonTabDetail.addEventListener('click', check2);
buttonTabNow.addEventListener('click', check1);