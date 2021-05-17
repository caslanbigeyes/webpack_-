import { isPrime } from "./isPrime";

export class getNumber {
    constructor(duration = 500) {
        this.duration = duration;
        this.number = 1;
        this.callbackFunc = null;
        this.timer = null;
    }

    start() {
        this.timer = setInterval(() => {

            this.callbackFunc && this.callbackFunc(this.number, isPrime(this.number))
            this.number++
        }, this.duration)
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }
}