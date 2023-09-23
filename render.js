import { createElements } from "./main.js";
// import { showList } from "./renderList.js";

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const form = document.querySelector('form');
const button = document.querySelector('button');
let arr;

function get(city) {
    const input = document.querySelector('.input');
    let cityName = input.value.trim()
    const cityToSearch = cityName !== '' ? cityName : city;

    const url = `${serverUrl}?q=${cityToSearch}&appid=${apiKey}&units=metric`;
    event.preventDefault();

    if (cityToSearch !== '') {
        fetch(url)
            .then(result => {
                if(!result.ok) {
                    throw new Error(`${result.status}`)
                }
                input.placeholder = 'City';
                return result.json()
            })
            .then(data => {
                console.log(data);
                arr = data;
                input.value = '';
                
                render(arr)
            })
            .catch(error => {
                console.error(error);
                
                input.placeholder = `${error} (Город не найден)`;
                input.value = '';
            });
        }
        
    }
    
    
function render(arr) {
    createElements(arr);
}

export {arr}

window.addEventListener('load', () => {
    get("Moscow");
});


form.addEventListener('submit', get);
button.addEventListener('click', get)
    
