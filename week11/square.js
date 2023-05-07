function myLoadFunction(){
var element = document.createElement('div');
element.style.width = '200px';
element.style.height = '200px';
element.style.backgroundColor = 'red';

document.body.appendChild(element);

/* var body = document.getElementsByTagName('body')[0];
body.appendChild(element); */

var a = document.createElement('a');
document.body.appendChild(a);

var text = document.createTextNode('Click me!');
a.appendChild(text);

var colors = ['red', 'green', 'blue', 'orange', 'purple', 'black', 'yellow', 'aqua', 'brown'];

a.addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * colors.length);
    element.style.backgroundColor = colors[randomNumber];
});

}


document.addEventListener('DOMContentLoaded', myLoadFunction);