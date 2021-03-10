//set the JSON source URL
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
.then(function (response){
    return response.json();
})
.then(function(jsonObject){
    const towns = jsonObject['towns'];

    // codes ideas from the discussion board of Week 9

    for(towns[i].name == "Fish Haven" || towns[i].name == "preston" || towns[i].name == "Soda springs"){
        let card = document.createElement('section'); // insert in section tab
        let heading = document.createElement('h2');
        
        let motto = document.createElement('h3');
        let year = document.createElement('p');
        let cP = document.createElement('p');
        let aR = document.createElement('p');
        let image = document.createElement('img');
        
        //output conditions
        heading.textContent = towns[i].name;
        heading.setAttribute('class','town_name');
        motto.textContent = towns[i].motto;
        motto.setAttribute('class', 'town_motto');
        year.textContent = 'Year Founded:' + towns[i].yearFounded;
        cP.textContent = 'Current Population:' + towns[i].currentPopulation;
        aR.textContent = ' Annual Rain Fall:' + towns[i].averageRainfall;
        image.setAttribute('src','images/ + towns[i].photo');
        image.setAttribute('src', towns[i].name);

        //select output location//
        card.appendChild(heading);
        card.appendChild(motto);
        card.appendChild(year);
        card.appendChild(cP);
        card.appendChild(aR);
        card.appendChild(image);

        document.querySelector('div.idahoTown').appendChild(card);

    
    }
});
