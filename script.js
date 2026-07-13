let pele = 1;
let olho = 1;
let cabelo = 1;


function trocarPele(){

pele++;

if(pele>3){
pele=1;
}

document.getElementById("pele").src =
"assets/pele/pele"+pele+".svg";

}



function trocarOlho(){

olho++;

if(olho>3){
olho=1;
}

document.getElementById("olhos").src =
"assets/olhos/olho"+olho+".svg";

}



function trocarCabelo(){

cabelo++;

if(cabelo>3){
cabelo=1;
}

document.getElementById("cabelo").src =
"assets/cabelos/cabelo"+cabelo+".svg";

}
