//----рекурсивный метот вызова таймаута
let timerId = setTimeout(function log() {
    console.log("Helloy")
    setTimeout(log, 2000)
    //clearTimeout(timerId)
})