//set the JSON source URL
const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

// use fetch to obtain a promise for
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    for(let i = 0; i<prophets.length; i++){

      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let image = document.createElement('img');
      let birthD = document.createElement('div');
      let birthP = document.createElement('div');

      //output conditions
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      birthD.textContent = "Birth Date :" + ' ' + prophets[i].birthdate;
      birthP.textContent = 'Birth Place :'+ ' ' + prophets[i].birthplace;
      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + '-'+ prophets[i].order);
    
      //use template intervals
       
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(birthD);
        card.appendChild(birthP);
        card.appendChild(image);
     
       //select output location//
    document.querySelector('div.cards').appendChild(card);
   }
    });

