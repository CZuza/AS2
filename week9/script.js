/* function loadFunction() {
    var h1 = document.getElementById('h1Tag');
    var p = document.getElementById('pTag');

    h1.addEventListener('click', clickH1);
    p.addEventListener('click', clickP);

}

function clickH1() {
    var h1 = document.getElementById('h1Tag');
    h1.firstChild.nodevalue = 'Heading Changed!!!';

    h1.style.backgroundColor = 'blue';
    h1.style.color = 'white';
}

function clickP() {
    var p = document.getElementById('pTag');
    p.firstChild.nodevalue = 'Paragraph Changed!!!';
}

document.addEventListener('DOMContentLoaded', loadFunction); */

function loadFunction() {
    var circle = document.getElementById('circle');
    circle.addEventListener('click', move);
}

function move(){
    var circle = document.getElementById('circle');
    var left = circle.offsetLeft;

    var top = circle.offsetTop;

    if(event.keyCode == 37){
    circle.style.left = left - 10 + 'px';

    }

    if(event.keyCode == 39){
    circle.style.left = left + 10 + 'px';
    }

    if(event.keyCode == 38 ){
    circle.style.top = top - 10 + 'px';

    }

    if(event.keyCode == 40){
    circle.style.top = top + 10 + 'px';
    
    }
}

document.addEventListener('keydown', move);