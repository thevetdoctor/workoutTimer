
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
		timerDisplay.innerText = `${Math.trunc(hours)} : ${Math.trunc(minutes)} : ${currentTime}`;


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
			// minutes = currentTime/60;
			// seconds = currentTime % 60;
		}
		if(minutes < 10) {
			// minutes = '0' + minutes;
		}
		timerDisplay.innerText = `${Math.trunc(hours)} : ${Math.trunc(minutes%60)} : ${currentTime%60}`;
		console.log(timerDisplay.innerText);
	}


	const startTimer = () => {
		setInter = setInterval(counter, 100);
		currentTime = 0;
		minutes = 0; hours = 0;
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
		timerDisplay.innerText = `${Math.trunc(hours)} : ${Math.trunc(minutes%60)} : ${currentTime%60}`;
	}

	const resumeTimer = () => {
		setInter = setInterval(counter, 100);
		timerDisplay.innerText = `${Math.trunc(hours)} : ${Math.trunc(minutes%60)} : ${currentTime%60}`;
		start.style.display = 'inline';
		pause.style.display = 'inline';
		resume.style.display = 'none';
		stop.style.display = 'inline';
	}

	const stopTimer = () => {
		clearInterval(setInter);
		timerDisplay.innerText = `${Math.trunc(hours)} : ${Math.trunc(minutes%60)} : ${currentTime%60}`;
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