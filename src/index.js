import appendNumber from "./page/appendNumber";
import { getNumber } from "./util/number";



var n = new getNumber()
n.callbackFunc = function (n, isPrime) {
    appendNumber(n, isPrime)
}

n.start()