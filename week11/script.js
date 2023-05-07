function myLoadFunction() {
var dice = document.getElementsByTagName('div');

for(var i = 0; i < dice.length; i++) {
    dice[i].addEventListener('click', setDice);
  }


}

function setDice() {
    var randomNumber = Math.ceil(Math.random() * 6);
    this.classList ='side' + randomNumber;

    this.nextSibling.nextSibling.firstChild.nodeValue = 'You rolled a ' + randomNumber;
}



document.addEventListener('DOMContentLoaded', myLoadFunction);