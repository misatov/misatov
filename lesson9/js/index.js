//set the JSON source URL
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
.then(function (response){
    return response.json();
})
.then(function(jsonObject){
    const towns = jsonObject['towns'];
    const three = towns.filter(towns =>(towns.name == "Fish Haven" || towns.name == "Preston" || towns.name == "Soda Springs"));

    // codes ideas from the discussion board of Week 9

    for(let i=0; i < three.length; i++){
        let card = document.createElement('section'); // insert in section tab
        let heading = document.createElement('h2');
        
        let motto = document.createElement('h3');
        let year = document.createElement('p');
        let cP = document.createElement('p');
        let aR = document.createElement('p');
        let image = document.createElement('img');
        
        //output conditions
        heading.textContent =three[i].name;
        heading.setAttribute('class','town_name');
        motto.textContent = three[i].motto;
        motto.setAttribute('class', 'town_motto');
        year.textContent = 'Year Founded:' + three[i].yearFounded;
        cP.textContent = 'Current Population:' + three[i].currentPopulation;
        aR.textContent = ' Annual Rain Fall:' + three[i].averageRainfall;
        image.setAttribute('src','images/' + three[i].photo);
        image.setAttribute('src', three[i].name);

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
