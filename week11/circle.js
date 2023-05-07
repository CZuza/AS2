function click(event){
    var circle  = document.createElement('div');
    circle.style.width = '100px';
    circle.style.height = '100px';
    circle.style.borderRadius = '100%';
    circle.style.position = 'absolute';
    circle.style.backgroundColor = 'red';
    document.body.appendChild(circle);

    circle.style.top = event.clientY + 'px';
    circle.style.left = event.clientX + 'px';

    var rand1 = Math.floor(Math.random() + 255);
    var rand2 = Math.floor(Math.random() + 255);
    var rand3 = Math.floor(Math.random() + 255);
    var rand4 = Math.random();

    circle.style.backgroundColor = 'rgba(' + rand1 + ',' + rand2 + ',' + rand3 + ',' + rand4 + ')';

    var size = Math.ceil(Math.random + 300);
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';

    var top = circle.offsetTop;
    var left = circle.offsetLeft;
    var speed = Math.ceil(Math.random() * 20)


    setInterval(function(
        left = left - 1;
        circle
    ), 10);
}

document.addEventListener('click', click);