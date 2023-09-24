export { createElements, arrList }

import { arr } from "./render.js";
import { showList } from "./renderList.js";

const cityText = document.querySelector('.city');
const mainBlock = document.querySelector('.block_main')
const imgBlock = document.querySelector('.weather_img')
const likedList = document.querySelector('.liked_list');

const twoArrList = [
    {id: 0, name: "Moscow"},
    {id: 1, name: "London"},
    {id: 2, name: "Novosibirsk"},
    {id: 3, name: "Nevinnomyssk"}
]

const arrList = [...twoArrList];
let idteg = arrList[arrList.length - 1].id;

function addCity() {
    console.log(arrList);

    const isCityExists = arrList.some(city => city.name === arr.name)

    if (!isCityExists && arr.name) {
        const newCity = {
            id: idteg++,
            name: arr.name,
        };

        arrList.push(newCity);
    
        likedList.innerHTML = ''
    
        showList(arrList)
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
    picBlock.src = `https://openweathermap.org/img/wn/${arr.weather[0]["icon"]}@4x.png`;
    imgBlock.insertAdjacentElement('afterbegin', picBlock);
    
    const temperatureBlock = document.createElement('div');
    temperatureBlock.setAttribute('class', 'temperature');
    temperatureBlock.innerText = `${arr.main.temp.toFixed()}°`;
    mainBlock.insertAdjacentElement('afterbegin', temperatureBlock);

    const nameBlock = document.createElement('div');
    nameBlock.setAttribute('class', 'city_name');
    nameBlock.innerText = arr.name;
    cityText.insertAdjacentElement('beforeend', nameBlock);

    const divCityBlock = document.createElement('div')
    divCityBlock.setAttribute('class', 'city_like');
    divCityBlock.addEventListener('click', addCity);

    cityText.insertAdjacentElement('beforeend', divCityBlock);
    const imgShapeBlock = document.createElement('img');
    imgShapeBlock.src = 'Shape.png';
    divCityBlock.insertAdjacentElement('beforeend', imgShapeBlock);
}



