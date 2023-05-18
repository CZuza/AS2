function loadFunction() {
    // This will log the width of the viewport
    alert(window.innerHeight);

    // This will log the width of the frame viewport within a frameset
    console.log(self.innerWidth);

    // This will log the width of the viewport of the closest frameset
    console.log(parent.innerWidth);

    // This will log the width of the viewport of the outermost frameset
    console.log(top.innerWidth);
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
    console.log(p.offsetLeft);
    console.log(p.offsetTop);
}

document.addEventListener('DOMContentLoaded', loadFunction);