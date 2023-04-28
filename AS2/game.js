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

}

function startGame() {

	var start = document.getElementById('start');
	start.style.display = 'none';

	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);

	setInterval(moveBombs, 10);
}

function positionBomb() {
	var bombs = documnets.getElementsByClassName('bomb');

	for(var i = 0; i < bombs.length; i++){
		var tankTop = document.getElementsByClassName('tank')[i].offsetTop;
		var tankLeft = document.getElementsByClassName('tank')[i].offsetLeft;

		bombs[i].style.top = tankTop + 10 + 'px';
		bombs[i].style.left = tankLeft + 'px';
	}
}

function moveBombs() {
	var bombs = document.getElementsByClassName('bomb');
	var player = document.getElementsById('player');

	for(var i = 0; i<bombs.length; i++) {
		var left = bombs[i].offsetLeft;
		var newLeft = left - 1;

		if(newLeft>0) {
			bombs[i].style.left = newLeft + 'px';
		}
		else {
			bombs[i].classList = 'explosion';

		
		}
		/* bombs[i].style.left = left-- + 'px'; */
		
	}
	var element = document.elementFromPoint(player.offsetleft, player.offsetTop);

	if(element.classList.contains('explosion')){
		/* alert('dead'); */
		player.classList = 'character stand down dead';
	}
}


document.addEventListener('DOMContentLoaded', myLoadFunction);