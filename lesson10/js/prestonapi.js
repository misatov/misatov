const apiURL1 = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8bbd262e26fa22b9acfd7a7ad5b87217&units=imperial';
//weather api
fetch (apiURL1)
.then((response) => response.json())
.then((jsObject) => {
    //console.log(jsObject);

    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('max').textContent = jsObject.main.temp_max;
    //Wind Chill is calculated by windchill.js
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;
}); 


const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=8bbd262e26fa22b9acfd7a7ad5b87217&units=imperial';
//table api
fetch (apiURL2)
.then((response) => response.json())
.then((jsObject) => {
    //console.log(jsObject);
 
    const forecast = jsObject['list'];
    const table = document.querySelector(".forecast");

    const forecastfilter = forecast.filter((x) =>
    x.dt_txt.includes("18:00:00")
    );
    console.log(forecastfilter);

    let day = 0;
    const dayofWeek = ['Sun', 'Mon','Tue','Wed','Thu','Fri','Sat'];
    dayNumber++;
    
    //print in table
    dayofWeek.forEach((forecastfilter => {
        let tData  = document.createElement('td');
        let tImg = document.createElement('img');
        let tImgURL = 'https://openweathermap.org/img/w' + `${forecastfilter.weather[0].icon}` + '.png';
        let d = `${forecastfilter.weather[0].description}`;

        tImg.setAttribute("src", tImgURL);
        tImg.setAttribute("alt",d);
        tData.innerHTML = tableimg + `{$forecastfilter.main.temp.toFixed(0)}`;
        
        table.appendChild(tData);
        console.log(tImgURL);
    }))


}); 