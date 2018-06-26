const PubSub = require( '../helpers/pub_sub.js')

const InputView = function () {

};

InputView.prototype.bindEvents = function () {
    const input = document.querySelector('#wordcounter-form');
    input.addEventListener('submit', (event) => {
        const inputWord = event.target.text.value;
        event.preventDefault();
        PubSub.publish('InputView: inputtedWord', inputWord);
        console.log(inputWord);
    })
};

module.exports = InputView;
