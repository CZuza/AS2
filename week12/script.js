function loadFunction() {
    createP('p', 'Test1');
    createP('h1', 'Test2');
    createP('h3', 'Test3');
}

function createP(tag, text) {
    var body = document.getElementsByTagName('body')[0];
    var p = document.createElement(tag);
    var textNode = document.createTextNode(text);
    
    body.appendChild(p);
    p.appendChild(textNode);
}

document.addEventListener('DOMContentLoaded', loadFunction);