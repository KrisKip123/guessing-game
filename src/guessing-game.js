class GuessingGame {

    constructor() {
        this.max = null;
        this.min = null;
        this.middle = null;
    }



    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        return this.middle = Math.round((this.max - this.min) / 2 + this.min);
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }

}

module.exports = GuessingGame;