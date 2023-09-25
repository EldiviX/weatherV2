export { get }

import { createElements, arrList } from "./main.js";
import { showList } from "./renderList.js";

const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const form = document.querySelector('form');
const button = document.querySelector('button');
let arr;

function get(city) {
    event.preventDefault();
    const input = document.querySelector('.input');
    let cityName = input.value
    let cityToSearch = cityName !== '' ? cityName : city;

    const url = `${serverUrl}?q=${cityToSearch}&appid=${apiKey}&units=metric`;

    if (cityToSearch.trim() !== '') {
        fetch(url)
            .then(result => {
                if(!result.ok) {
                    throw new Error(`${result.status}`)
                }
                input.placeholder = 'City';
                return result.json()
            })
            .then(data => {
                arr = data;
                input.value = '';
                console.log(arr);
                render(arr)
            })
            .catch(error => {
                console.error(error);
                
                input.placeholder = `City not found`;
                input.value = '';
            });
        }
        
    }
    
function render(arr) {
    createElements(arr);
}


window.addEventListener('load', () => {
    get("Moscow");
    showList(arrList);
});

export {arr}

form.addEventListener('submit', get);
button.addEventListener('click', get)
    
