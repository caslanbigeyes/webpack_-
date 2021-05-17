

let isStart = false;
var n = new getNumber()
n.callbackFunc = function (n, isPrime) {
    appendNumber(n, isPrime)
}

window.onclick = function () {
    if (isStart) {

        n.stop()
        isStart = false
    } else {
        n.start()
        isStart = true
    }
}