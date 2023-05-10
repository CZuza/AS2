/* function myLoadFunction() {
    var element = document.getElementById('head0');
    element.addEventListener('click', setHead0);
    
    var element = document.getElementById('head1'); 
    element.addEventListener('click', setHead1);
        
    var element = document.getElementById('head2'); 
    element.addEventListener('click', setHead2); 
        
    var element = document.getElementById('head3'); 
    element.addEventListener('click', setHead3); 
        
    var element = document.getElementById('head'); 
    element.addEventListener('click', setHead4); 
}  */

/* function setHead0() {
    var element = document.getElementsByClassName('head')[0]; 
    element.style.backgroundImage = 'url(images/head0.png)';
 }

 function setHead1() {
    var element = document.getElementsByClassName('head')[0];
    element.style.backgroundImage = 'url(images/head1.png)';
}

function setHead2() {
    var element = document.getElementsByClassName('head')[0];
    element.style.backgroundImage = 'url(images/head2.png)';
}

function setHead3() {
    var element = document.getElementsByClassName('head')[0];
    element.style.backgroundImage = 'url(images/head3.png)';
}

function setHead4() {
    var element = document.getElementsByClassName('head')[0];
    element.style.backgroundImage = 'url(images/head4.png)';
} */
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;

function keyup(event) {
	var player = document.getElementById('player');
	if (event.keyCode == 37) {
		leftPressed = false;
		lastPressed = 'left';
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		lastPressed = 'right';
	}
	if (event.keyCode == 38) {
		upPressed = false;
		lastPressed = 'up';
	}
	if (event.keyCode == 40) {
		downPressed = false;
		lastPressed = 'down';
	}

	player.className = 'character stand ' + lastPressed;
}


function keydown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}
}




function move() {
	var player = document.getElementById('player');
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	if (downPressed) {
		var newTop = positionTop + 1;

        var downward = document.elementFromPoint(positionLeft, newTop + 46);
		if (downward.classList.contains('tree') == false) {
			player.style.top = newTop + 'px';
		}

		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk down';
			}
		}
	}
	if (upPressed) {
		var newTop = positionTop - 1;

		var upward = document.elementFromPoint(positionLeft, newTop);
		if (upward.classList.contains('tree') == false) {
			player.style.top = newTop + 'px';
		}

		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk up';
			}
		}
	}
	if (leftPressed) {
		var newLeft = positionLeft - 1;

		var leftward = document.elementFromPoint(newLeft, positionTop);
		if (leftward.classList.contains('tree') == false) {
			player.style.left = newLeft + 'px';
		}

		

		player.className = 'character walk left';
	}
	if (rightPressed) {
		var newLeft = positionLeft + 1;

        var rightward = document.elementFromPoint(newLeft + 32, positionTop);
		if (rightward.classList.contains('tree') == false) {
			player.style.left = newLeft + 'px';
		}
		

		player.className = 'character walk right';
	}

}



function myLoadFunction() {
  var headsUL = document.getElementsByClassName('heads')[0];
  var headLI = headsUL.getElementsByTagName('li');

  for(var i = 0; i < headLI.length; i++) {
    headLI[i].addEventListener('click', setHead)
  }

  var bodyUL = document.getElementsByClassName('bodies')[0];
  var bodyLI = bodyUL.getElementsByTagName('li');

  for(var i = 0; i < bodyLI.length; i++) {
    bodyLI[i].addEventListener('click', setBody)
  }

  timeout = setInterval(move, 10);
  document.addEventListener('keydown', keydown);
  document.addEventListener('keyup', keyup);
}

function setHead() {
    var head = document.getElementsByClassName('head')[0];
    head.style.backgroundImage = 'url(images/' + this.id + '.png)';
}

function setBody() {
    var body = document.getElementsByClassName('body')[0];
    body.style.backgroundImage = 'url(images/' + this.id + '.png)';
}

/* function createApple() {
	var apple = document.createElement('div');
	apple.classList = 'apple';
	document.body.appendChild(apple);

	return apple;

	function moveApple(apple) {
		var left = apple.OffsetLeft;

		setInterval(function(){
			left = left + 1;

			if (left < (window.innerWidth - apple.offsetWidth)) {
				apple.style.left = left +'px';
			}
			else {
				apple.classList = 'explosion';
			}
		}, 10);
	}

	function collision(left, top, collide) {

	}
}  */



document.addEventListener('DOMContentLoaded', myLoadFunction);