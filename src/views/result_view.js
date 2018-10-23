const PubSub = require("../helpers/pub_sub.js");

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("primeNumber:result-calculated", (event) =>{
    const isNumberPrime = event.detail;
    this.displayResult(isNumberPrime);
  });
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  let resultString = ""
  if (result === true) {
    resultString = "Yes! It's a prime number."
  } else {
    resultString = "No! It is not a prime number."
  }
  resultElement.textContent = `${ resultString } `
}



module.exports = ResultView;
