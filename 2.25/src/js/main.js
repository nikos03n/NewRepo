//----рекурсивный метот вызова таймаута
let timerId = setTimeout(function log() {
	clearTimeout(timerId)
	console.log("Helloy")
	setTimeout(log, 2000)
}) 