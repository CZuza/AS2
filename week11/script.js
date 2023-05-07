function myLoadFunction() {
var dice = document.getElementsByTagName('div');

for(var i = 0; i < dice.length; i++) {
    dice[i].addEventListener('click', setDice);
  }


}

function setDice() {
    var randomNumber = Math.ceil(Math.random() * 6);
    this.classList ='side' + randomNumber;

    var p = this.nextSibling.nextSibling;
    var numbers = ['one', 'two', 'three', 'four', 'five', 'six'];
    for(var i = 1; i <= 6; i++) {
      if (i == randomNumber){
        p.firstChild.nodeValue = 'You rolled a ' + numbers[i-1];
      }
    }
}



document.addEventListener('DOMContentLoaded', myLoadFunction);