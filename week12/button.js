function loadFunction() {
    var button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', addToList);
}

function addToList() {
    var ul = document.getElementsByTagName('ul')[0];
    var li = document.createElement('li');
    var numbers = [];

    var pickAgain = true;
    while (pickAgain == true) {
        var random = Math.ceil(Math.random() * 100);
        var alreadyPicked = false;

        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] == random) {
                alreadyPicked = true;
            }

            if (alreadyPicked == true) {
                pickAgain = true;
            }
            else {
                pickAgain = false;
            }
        }

        numbers.push(random);
    }


    var text = document.createTextNode(random);
    li.appendChild(text);
    ul.appendChild(li);
}



document.addEventListener('DOMContentLoaded', loadFunction);