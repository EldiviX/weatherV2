import { createElements, arrList } from "./main.js";
import { showList } from "./renderList.js";
import { visible2, check1, check2 } from "./renderTabs.js";

const serverUrl = 'https://api.openweathermap.org/data/2.5/forecast';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const form = document.querySelector('form');
const button = document.querySelector('button');
let arr;

async function get(city) {
        event.preventDefault();
        const input = document.querySelector('.input');
        let cityName = input.value
        let cityToSearch = cityName !== '' ? cityName : city;

        const url = `${serverUrl}?q=${cityToSearch}&appid=${apiKey}&units=metric`;

        try {
            if (cityToSearch.trim() !== '') {
                const result = await fetch(url);
    
                if(!result.ok) {
                    throw new Error(`${result.status}`);
                }
                
                input.placeholder = 'City';
                const data = await result.json();
                arr = data;
                input.value = '';
                console.log(arr);
                render(arr);
    
                if (visible2 === true) {
                    check1();
                    check2();
                }
            } 
        } catch (error) {
            console.error(error);
                            
            input.placeholder = `City not found`;
            input.value = '';
            
        }
    }
        
function render(arr) {
    createElements(arr);
}


window.addEventListener('load', () => {
    get("Moscow");
    showList(arrList);
});

export { get }
export {arr}

form.addEventListener('submit', get);
button.addEventListener('click', get)
    
