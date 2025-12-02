const playBtn = document.getElementById('play');
let play = true;
let count = 10;
playBtn.addEventListener('click', () => {
	console.log('waiting for timeout');
	const timeout = setTimeout(() => {
		console.log('This message is displayed after 5 seconds');
		alert('Timeout completed!');
		if (playBtn.textContent === 'Start') {
			playBtn.textContent = 'Pause';
		} else {
			clearTimeout(timeout);
			playBtn.textContent = 'Start';
		}
	}, 5000);
});

const myInterval = setInterval(() => {
	console.log(count);
	count -= 1;
	// if (!play) {
	// 	clearInterval(myInterval);
	// }
    if(count === 0) {
        clearInterval(myInterval)
    }
}, 2000);
