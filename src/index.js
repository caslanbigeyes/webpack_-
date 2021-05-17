import appendNumber from "./page/appendNumber";
import { getNumber } from "./util/number";



var n = new getNumber(500)
n.callbackFunc = function (n, isPrime) {
    appendNumber(n, isPrime)
}


let isStart = false;
window.onclick = function () {
    console.log(11)
    if (isStart) {
        n.stop()
        isStart = false
    } else {
        n.start()
        isStart = true
    }
}