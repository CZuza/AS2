function loadFunction() {
    var button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', addToList);
}

function addToList() {
    var ul = document.getElementsByTagName('ul')[0];

    var random = Math.ceil(Math.random() * 100);

    var li = document.createElement('li');
    var text = document.createTextNode(random);
    li.appendChild(text);
    ul.appendChild(li);
}

document.addEventListener('DOMContentLoaded', loadFunction);