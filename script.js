 // workoutTimer js
// Pre-interview Technical Challenge (Andela)


	// Variable declarations

	let start = document.querySelector('.start'),
	    pause = document.querySelector('.pause'),
	    resume = document.querySelector('.resume'),
	    stop = document.querySelector('.stop'),
		timerDisplay = document.querySelector('.timer-display'),
		setInter,
		currentTime = 0,
		seconds = 0,
		minutes = 0,
		hours = 0;
		timerDisplay.innerText = currentTime;
		timerDisplay.innerText = `0${Math.trunc(hours)} : 0${Math.trunc(minutes)} : 0${currentTime}`;


		// Setting visibility of buttons

		pause.style.display = 'none';
		resume.style.display = 'none';
		stop.style.display = 'none';


		// Function declarations

	const counter = () => {
		currentTime++;
		if(currentTime % 60 === 0) {
			minutes = currentTime / 60;
			seconds = currentTime % 60;
		}
		if(minutes % 60 === 0) {
			hours = currentTime / 3600;
			minutes = minutes % 60;
		}

		hours = Math.trunc(hours) > 9 ? Math.trunc(hours) : `0${Math.trunc(hours)}`;
		minutes = Math.trunc(minutes % 60) > 9 ? Math.trunc(minutes % 60) : `0${Math.trunc(minutes % 60)}`;
		seconds = currentTime % 60 > 9 ? currentTime % 60 : `0${currentTime % 60}`;

		timerDisplay.innerText = `${hours} : ${minutes} : ${seconds}`;
		console.log(timerDisplay.innerText);
	}


	const startTimer = () => {
    stopTimer();
		currentTime = 0;
		minutes = 0; hours = 0;
		setInter = setInterval(counter, 1000);
		start.style.display = 'none';
		pause.style.display = 'inline';
		resume.style.display = 'none';
		stop.style.display = 'inline';
	}

	const pauseTimer = () => {
		clearInterval(setInter);
		start.style.display = 'inline';
		pause.style.display = 'none';
		resume.style.display = 'inline';
	}

	const resumeTimer = () => {
		setInter = setInterval(counter, 1000);
		start.style.display = 'inline';
		pause.style.display = 'inline';
		resume.style.display = 'none';
		stop.style.display = 'inline';
	}

	const stopTimer = () => {
		clearInterval(setInter);
		start.style.display = 'inline';
		pause.style.display = 'none';
		resume.style.display = 'inline';
		stop.style.display = 'none';
	}


	// Event listeners for click events

	start.addEventListener('click',	startTimer);

	pause.addEventListener('click',	pauseTimer);

	resume.addEventListener('click', resumeTimer);

	stop.addEventListener('click', stopTimer);