const ResultView = require("./views/result_view.js");
const FormView = require("./views/form_view.js");
const PrimeChecker = require("./models/primechecker.js");


document.addEventListener('DOMContentLoaded', () => {

  const formView = new FormView();
  formView.bindEvents();

  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

});
