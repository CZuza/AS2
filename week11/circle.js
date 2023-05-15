function click(event) {
    var circle  = document.createElement('div');
    circle.style.position = 'absolute';
    circle.style.backgroundColor = 'red';
    var size = Math.ceil(Math.random() * 451) + 50;
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';

    // clicked point becomes the top-left part of the circle
    /* circle.style.top = event.clientY + 'px';
    circle.style.left = event.clientX + 'px'; */

    // clicked point becomes the center of the circle

    circle.style.left = event.clientX - (size / 2) + 'px';
    circle.style.top = event.clientY - (size / 2) + 'px';
    
    circle.style.borderRadius = '100%';

    var rand1 = Math.floor(Math.random() * 255);
    var rand2 = Math.floor(Math.random() * 255);
    var rand3 = Math.floor(Math.random() * 255);
    var rand4 = Math.random();

    circle.style.backgroundColor = 'rgba(' + rand1 + ',' + rand2 + ',' + rand3 + ',' + rand4 + ')';

  

    /* var top = circle.offsetTop;
    var left = circle.offsetLeft; */
    var speed = Math.ceil(Math.random() * 100); 

    setInterval(function () {
        size = size - 1;
        circle.style.width = size + 'px';
        circle.style.height = size + 'px';
    }, speed);

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(circle);
}

document.addEventListener('click', click);