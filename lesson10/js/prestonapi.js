const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8bbd262e26fa22b9acfd7a7ad5b87217&units=imperial';

fetch (apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
 /*    const temperature = document.querySelector('#temperature');
    document.getElementById('temperature').textContent = jsObject.main.temp; */
    const forecast = jsObject['list'];
    const table = document.querySelector(//#endregion);

    const forecastfilter = forecast.filter((time) =>
    time.dt.txt.includes("18:00:00")
    );

    //print in table
    forecastfilter.forEach((filtered => {
        let tData  = document.createElement('td');
        let tImg = document.createElement('img');
        let tImgURL = 'https:openweathermap.org/img/w' + time.weather[0].icon + '.png';
        let d = time.weather[0].description;

        tImg.setAttribute("src", tImgURL);
        tImg.setAttribute("alt",d);
        tData.innerHTML = tableimg + time.main.temp.toFixed(0);
        table.appendChild(tData);

    }))

    //console.log(forecastfilter);
    

   /*  const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc); */


});