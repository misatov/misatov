let temp = parseFloat(document.querySelector('#temp').textContent);
let speed = parseFloat(document.querySelector('#speed').textContent);

let f = 35.74 + 0.6215*temp - 35.75*Math.pow(speed*0.16) + 0.4275*temp*Math.pow(speed*0.16);

if(temp<=50 && speed>3){
    f =f.toFixed(1);
}
else{ 
    f = "N/A";
}
document.getElementById('windchill').innerHTML = f;


