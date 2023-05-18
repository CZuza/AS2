var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;
//This variable is supposed to determine if the message displays the "start" message
var isStart = true;

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

function stopCharacter() {
	clearInterval(timeout);
	document.removeEventListener('keyup', keyup);
	document.removeEventListener('keydown', keydown);
	player.classList = 'character stand down dead';
}

// This variable will be used to start and stop the tanks movement
var tanksTimer = 0;


function myLoadFunction() {
	var start = document.getElementById('start');
	// If the button doesn't display 'Game Over' and is clicked, start game
	if(start.firstChild.nodeValue != 'Game Over'){
		start.addEventListener('click', startGame);
		positionBomb();
	}
	else{
		// To prevent the character from moving if Game Over message is clicked (not working :(| )
		start.addEventListener('click', stopCharacter);
		// To stop the tanks from moving after Game Over message is clicked 
		clearInterval(tanksTimer);
	}

}

function startGame() {
	//This if statement determines whether the display message was "start"
    if (isStart){

		var start = document.getElementById('start');
		start.style.display = 'none';

		timeout = setInterval(move, 10);
		document.addEventListener('keydown', keydown);
		document.addEventListener('keyup', keyup);

		//If the button displays "Start" (not "Game Over"), start the game if clicked
		if (start.firstChild.nodeValue != 'Game Over') {
			positionTank();
			tanksTimer = setInterval(positionTank, 3000);
		}
		else {
			// If the button displays 'Game Over', it will stay on the screen
			var start = document.getElementsByClassName('start')[0];
			start.style.display = 'block';
		}
    }	
}

function positionBomb() {
	var bombs = document.getElementsByClassName('bomb');

	for (var i = 0; i < bombs.length; i++) {
		var tankLeft = document.getElementsByClassName('tank')[i].offsetLeft;
		var tankTop = document.getElementsByClassName('tank')[i].offsetTop;

		bombs[i].style.left = tankLeft + 'px';
		bombs[i].style.top = tankTop + 10 + 'px';
	}

}

function positionTank() {
	var tanks = document.getElementsByClassName('tank');
	for (var i = 0; i < tanks.length; i++) {
		var random = Math.ceil(Math.random() * 81 + 9);
		tanks[i].style.top = random + 'vh';

		var bomb = document.createElement('div');
		bomb.classList = 'bomb';
		var top = tanks[i].offsetTop;
		//console.log(top);
		var left = tanks[i].offsetLeft;
		//console.log(left);

		bomb.style.top = top + 10 + 'px';
		bomb.style.left = left + 'px';
		document.body.appendChild(bomb);

		moveBomb(bomb);
	}
}

function moveBomb(bomb) {
	var left = bomb.offsetLeft;
	var speed = Math.ceil(Math.random() * 25);
	//The width of the window: 1536
	//The leftmost point of the tanks: 1229
	//982 is meant as a middleground between the leftmost 0 and the tanks
	//without running the risk of exploding right after being shot
	var random = Math.ceil(Math.random() * 982);

	setInterval(function() {
		left--;

		if(left > random){
			bomb.style.left = left + 'px';
		}
		else{
			bomb.classList = 'explosion';

			//Remove the explosion after 1 sec.
			setTimeout(function(){
				bomb.parentNode.removeChild(bomb);
			}, 1000)

			//clearInterval(timeout);
		}
	}, speed);
    
	var player = document.getElementById('player');
	var topLeft = document.elementFromPoint(player.offsetLeft, player.offsetTop);
	var topRight = document.elementFromPoint(player.offsetLeft + 32, player.offsetTop);
	var bottomLeft = document.elementFromPoint(player.offsetLeft, player.offsetTop + 46);
	var bottomRight = document.elementFromPoint(player.offsetLeft + 32, player.offsetTop + 46);

	if (topLeft.classList.contains('explosion') || topRight.classList.contains('explosion')
		|| bottomLeft.classList.contains('explosion') || bottomRight.classList.contains('explosion')) {
		
		player.classList = 'character stand down dead';
		// To prevent the character from moving after Game Over
		clearInterval(timeout);
		document.removeEventListener('keyup', keyup);
		document.removeEventListener('keydown', keydown);
		// To stop the tanks from moving after Game Over
		clearInterval(tanksTimer);


		var start = document.getElementsByClassName('start')[0];
		start.style.display = 'block';
		start.firstChild.nodeValue = 'Game Over';
		//This shows that the message is no longer "START"
		isStart = false;
	
}
}


document.addEventListener('DOMContentLoaded', myLoadFunction);