export { createElements, arrList, saveArrListToLocalStorage }

import { arr } from "./render.js";
import { showList } from "./renderList.js";

const cityText = document.querySelector('.city');
const mainBlock = document.querySelector('.block_main');
const imgBlock = document.querySelector('.weather_img');
const likedList = document.querySelector('.liked_list');

let idteg = 0;

const twoArrList = [
    {id: 0, name: "Moscow"},
    {id: 1, name: "London"},
    {id: 2, name: "New Jersey"},
    {id: 3, name: "Cape Town"}
];

let arrList = [...twoArrList];

if (localStorage.getItem('arrList')) {
    arrList = JSON.parse(localStorage.getItem('arrList'));
}

if (arrList.length > 0) {
    idteg = arrList[arrList.length - 1].id;
}

function saveArrListToLocalStorage() {
    localStorage.setItem('arrList', JSON.stringify(arrList));
}

window.removeFromLocalStorage = function() {
    localStorage.removeItem('arrList');
    arrList = [...twoArrList];
    location.reload();
}

function addCity() {
    console.log(arrList);

    let isCityExists = arrList.some(city => city.name === arr.city.name);

    if (!isCityExists && arr.city.name) {
        const newCity = {
            id: idteg++,
            name: arr.city.name,
        };

        arrList.push(newCity);
    
        likedList.innerHTML = ''
    
        showList(arrList)

        saveArrListToLocalStorage()
    }

}

function removeElements() {
    const temperature = document.querySelector('.temperature')
    const pic = document.getElementById('pic')
    const cityName = document.querySelector('.city_name')
    const cityLike = document.querySelector('.city_like')

    if (temperature) {
        temperature.remove();
    }
    if (pic) {
        pic.remove();
    }
    if (cityName) {
        cityName.remove();
    }
    if (cityLike) {
        cityLike.remove();
    }
}

function createElements(arr) {
    removeElements()
    const picBlock = document.createElement('img');
    picBlock.id = 'pic';
    picBlock.src = `https://openweathermap.org/img/wn/${arr.list[0].weather[0].icon}@4x.png`;
    imgBlock.insertAdjacentElement('afterbegin', picBlock);
    
    const temperatureBlock = document.createElement('div');
    temperatureBlock.setAttribute('class', 'temperature');
    temperatureBlock.innerText = `${arr.list[0].main.temp.toFixed()}°`;
    mainBlock.insertAdjacentElement('afterbegin', temperatureBlock);

    const nameBlock = document.createElement('div');
    nameBlock.setAttribute('class', 'city_name');
    nameBlock.innerText = arr.city.name;
    cityText.insertAdjacentElement('beforeend', nameBlock);

    const divCityBlock = document.createElement('div')
    divCityBlock.setAttribute('class', 'city_like');
    divCityBlock.addEventListener('click', addCity);

    cityText.insertAdjacentElement('beforeend', divCityBlock);
    const imgShapeBlock = document.createElement('img');
    imgShapeBlock.src = 'pictures/Shape.png';
    divCityBlock.insertAdjacentElement('beforeend', imgShapeBlock);
}



