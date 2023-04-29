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


function move() {
	var player = document.getElementById('player');
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	if (downPressed) {
		var newTop = positionTop + 1;

        var downward = document.elementFromPoint(positionLeft, newTop + 46);
		if (downward.classList.contains('cactus') == false) {
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
		if (upward.classList.contains('cactus') == false) {
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
		if (leftward.classList.contains('cactus') == false) {
			player.style.left = newLeft + 'px';
		}

		

		player.className = 'character walk left';
	}
	if (rightPressed) {
		var newLeft = positionLeft + 1;

        var rightward = document.elementFromPoint(newLeft + 32, positionTop);
		if (rightward.classList.contains('cactus') == false) {
			player.style.left = newLeft + 'px';
		}
		

		player.className = 'character walk right';
	}

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


function myLoadFunction() {
	var start = document.getElementById('start');
	start.addEventListener('click', startGame);

	positionBomb();
}

function startGame() {
    
	var start = document.getElementById('start');
	start.style.display = 'none';

	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
    
	setInterval(moveBomb, 7);
	
}

function positionBomb() {
	var bombs = document.getElementsByClassName('bomb');

	for(var i = 0; i < bombs.length; i++) {
		var tankLeft = document.getElementsByClassName('tank')[i].offsetLeft;
		var tankTop = document.getElementsByClassName('tank')[i].offsetTop;

		bombs[i].style.left = tankLeft + 'px';
		bombs[i].style.top = tankTop + 10 + 'px';
	}

}

function moveBomb() {
	var bombs = document.getElementsByClassName('bomb');

	for(var i = 0; i < bombs.length; i++) {
		var left = bombs[i].offsetLeft;
		left--;

		if(left>0) {
			bombs[i].style.left = left + 'px';
		}
		else {
			bombs[i].classList = 'explosion';

		
		}
		/* bombs[i].style.left = left-- + 'px'; */
		
	}
	var player = document.getElementById('player');
	var topLeft = document.elementFromPoint(player.offsetLeft, player.offsetTop);
	var topRight = document.elementFromPoint(player.offsetLeft + 32, player.offsetTop);
	var bottomLeft = document.elementFromPoint(player.offsetLeft, player.offsetTop + 46);
	var bottomRight = document.elementFromPoint(player.offsetLeft + 32, player.offsetTop + 46);

	if(topLeft.classList.contains('explosion') || topRight.classList.contains('explosion') 
	|| bottomLeft.classList.contains('explosion') || bottomRight.classList.contains('explosion')) {
		clearInterval(timeout);
		document.removeEventListener('keyup', keyup);
		document.removeEventListener('keydown', keydown);

		player.classList = 'character stand down dead';

		var start = document.getElementsByClassName('start')[0];
		start.style.display = 'block';
		start.firstChild.nodeValue = 'Game Over';
	}
}


document.addEventListener('DOMContentLoaded', myLoadFunction);