const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8bbd262e26fa22b9acfd7a7ad5b87217&units=imperial';

fetch (apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
 /* const temperature = document.querySelector('#temperature');
    document.getElementById('temperature').textContent = jsObject.main.temp; */
    const forecast = jsObject['list'];
    const table = document.querySelector(#forecast);

    const forecastfilter = forecast.filter((x) =>
    x.dt.txt.includes("18:00:00")
    );
    //console.log(forecastfilter);
    //print in table
    forecastfilter.forEach((filtered => {
        let tData  = document.createElement('td');
        let tImg = document.createElement('img');
        let tImgURL = 'https:openweathermap.org/img/w' +xe.weather[0].icon + '.png';
        let d = x.weather[0].description;

        tImg.setAttribute("src", tImgURL);
        tImg.setAttribute("alt",d);
        tData.innerHTML = tableimg + x.main.temp.toFixed(0);
        table.appendChild(tData);

    }))


});