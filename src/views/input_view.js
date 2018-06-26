const PubSub = require( '../helpers/pub_sub.js')

const InputView = function () {

};

InputView.prototype.bindEvents = function () {
    const input = document.querySelector('#text');
    input.addEventListener('input', (event) => {
        const inputWord = event.target.value;
        PubSub.publish('InputView: inputtedWord', inputWord);
        console.log(inputWord);
    })
};

module.exports = InputView;
