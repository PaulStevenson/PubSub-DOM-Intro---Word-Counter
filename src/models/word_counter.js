const PubSub = require( '../helpers/pub_sub.js');

const WordCounter = function () {

    WordCounter.prototype.bindEvents = function () {
        PubSub.subscribe('InputView: number-word', (event) => {
            const inputtedWord = event.detail;
            const result = this.countWord(inputtedWord);
            PubSub.publish('WordCounter: result', result)
        })
    };

    WordCounter.prototype.countWord = function (string) {
        const arrayWord = string.split(" ");
        return arrayWord.length;
    };

}
module.exports = WordCounter;
