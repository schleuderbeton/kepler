export default class MathService {

    constructor () {

    }

    /**
     * Returns a random integer value between the given minimum and maximum value. If no minimum and maximum given a
     * random number between 0 and 1000 will be returned.
     *
     * @param min
     * @param max
     * @returns {number}
     */
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

}