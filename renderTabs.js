import { arr } from "./render.js";

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
    createFiller();
    createMainTab();
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

function createMainTab() {
    const blcokDetail = document.querySelector('.block_detail');
    const cityName = document.createElement('div');
    const cityTime = document.createElement('div');
    cityTime.classList.add('tab_city_date')

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const hours = String(now.getHours())
    const minutes = String(now.getMinutes()).padStart(2, '0'); 


    const formattedDate = `${dayOfWeek}, ${day} ${month} ${hours}:${minutes}`;

    cityTime.innerText = formattedDate;
    
    cityName.innerText = arr.city.name;
    cityName.classList.add('tab_city_name');
    blcokDetail.insertAdjacentElement('beforeend', cityName);
    blcokDetail.insertAdjacentElement('beforeend', cityTime);

    const weather = document.createElement('div');
    weather.classList.add('tab_weather');
    weather.innerText = arr.list[0].weather[0].main;
    
    const mainTempBlock = document.createElement('div');
    mainTempBlock.classList.add('main_temp_block');
    const tempBlcok = document.createElement('div');
    tempBlcok.classList.add('temp_block');
    const pict = document.createElement('img');
    pict.classList.add('tab_city_pict');
    pict.setAttribute('src', `https://openweathermap.org/img/wn/${arr.list[0].weather[0].icon}@4x.png`);
    const tempText = document.createElement('div')
    tempText.innerText = `${arr.list[0].main.temp.toFixed()}°`
    tempText.classList.add('temp_text');
    tempBlcok.insertAdjacentElement('beforeend', pict);
    tempBlcok.insertAdjacentElement('beforeend', tempText);
    mainTempBlock.insertAdjacentElement('beforeend', tempBlcok);
    mainTempBlock.insertAdjacentElement('beforeend', weather);
    blcokDetail.insertAdjacentElement('beforeend', mainTempBlock);

    const sunriseTimestamp = arr.city.sunrise;
    const sunsetTimestamp = arr.city.sunset;

    const sunriseMilliseconds = sunriseTimestamp * 1000;
    const sunsetMilliseconds = sunsetTimestamp * 1000;

    const sunriseDate = new Date(sunriseMilliseconds);
    const sunsetDate = new Date(sunsetMilliseconds);

    const sunriseHours = sunriseDate.getHours();
    
    const sunriseMinutes = String(sunriseDate.getMinutes()).padStart(2, '0');

    const sunsetHours = sunsetDate.getHours();
    const sunsetMinutes = String(sunsetDate.getMinutes()).padStart(2, '0');

    const downBlock = document.createElement('div');
    downBlock.classList.add('down_block');
    blcokDetail.insertAdjacentElement('beforeend', downBlock);
    const downBlockText1 = document.createElement('div');
    downBlockText1.innerText = `Sunrise: ${sunriseHours}:${sunriseMinutes}`;
    downBlockText1.classList.add('down_block_t1')
    const sunriseBlock = document.createElement('div');
    sunriseBlock.classList.add('sunrise_block');
    const sunrise = document.createElement('img');
    sunrise.setAttribute('src', 'pictures/rise.png');
    sunriseBlock.insertAdjacentElement('afterbegin', sunrise);
    sunrise.classList.add('sunrise');
    downBlockText1.insertAdjacentElement('afterbegin', sunriseBlock);
    const downBlockText2 = document.createElement('div');
    downBlockText2.classList.add('down_block_t2')
    downBlockText2.innerText = `Sunset: ${sunsetHours}:${sunsetMinutes}`;
    downBlock.insertAdjacentElement('beforeend', downBlockText1);
    downBlock.insertAdjacentElement('beforeend', downBlockText2);

    const sunset = document.createElement('img');
    sunset.classList.add('sunset');
    sunset.setAttribute('src', 'pictures/set.png');
    const sunsetBlock = document.createElement('div');
    sunsetBlock.classList.add('sunset_block');
    sunsetBlock.insertAdjacentElement('afterbegin', sunset);
    downBlockText2.insertAdjacentElement('afterbegin', sunsetBlock);
    const border = document.createElement('div');
    border.classList.add('border');
    downBlock.insertAdjacentElement('beforeend', border);
}

export {visible1, visible2, createTab, removeTab, check1, check2}

buttonTabDetail.addEventListener('click', check2);
buttonTabNow.addEventListener('click', check1);