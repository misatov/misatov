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
//forecast api
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

    for (let i = 0; i <jsObject.list.length; i++){
      let day = "day" + $,{i};
      let icon = "icon"+ $,{i};
      let temp = "temp"+ $,{i};
      
      let imagesrc = 'https://openweathermap.org/img/w' + `${forecastfilter.weather[0].icon}` + '.png';
      let d = `${forecastfilter.weather[0].description}`;

      let dayName = days[d.getDay()];
    
      //dayname
      document.getElementById(day).textContent =dayName;
      //icon
      document.getElementById(icon).setAttribute('src',imagesrc);
      document.getElementById(icon).setAttribute("alt",d);
      //temperature
      document.getElementById(temp).textContent =`${forecastfilter.main.temp.toFixed(0)}`;

       console.log(imgsrc);
       i++;
      
  }


/* 
//print in table
dayofWeek.forEach((forecastfilter => {
    let tData  = document.createElement('td');
    let tImg = document.createElement('img');
    let tImgURL = 'https://openweathermap.org/img/w' + `${forecastfilter.weather[0].icon}` + '.png';
    let d = `${forecastfilter.weather[0].description}`;


//Icon
    let imagesrc = jsObject.list[i].icon + '.png';
    tImg.setAttribute("src", tImgURL);
    tImg.setAttribute("alt",d);
//Temperature
    tData.innerHTML = tableimg + `${forecastfilter.main.temp.toFixed(0)}`;
    
    document.getElementById(icon).textContent = (imagesrc);
    table.appendChild(tData);
    console.log(tImgURL);

    i++; */

    }

); 