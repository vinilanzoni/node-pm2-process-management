function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function main () {
	count = 1;
	setInterval(() => {
		var number = getRandomInt(10);
		if(number === 0 && count > 3) {
			throw new Error('Error occured after ' + count + ' loops!');
		} else {
			console.log('[' + process.pid + '] This is call #' + count);
		}
		count++;
	}, 1000);
}

main()
