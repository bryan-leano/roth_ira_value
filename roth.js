// How to calculate your Roth's value in the future

var birthYear, retirementAge, annualAmount, totalAmount;

document.querySelector('.btn-calculate').addEventListener('click', function() {
  birthYearInput = document.querySelector('.birth-year').value;
  retirementAgeInput = document.querySelector('.retirement-age').value;
  annualAmountInput = document.querySelector('.annual-amount').value;

  if ( birthYearInput && retirementAgeInput && annualAmountInput ) {
    calculate();
  } else if ( birthYearInput && retirementAgeInput ) {
    console.log('Please fill out annual amount!');
  } else if ( birthYearInput && annualAmountInput ) {
    console.log('Please fill out retirement age!');
  } else if ( retirementAgeInput && annualAmountInput ) {
    console.log('Please fill out birth year!');
  } else if ( birthYearInput ) {
    console.log('Please fill out retirement age and annual amount!');
  } else if ( retirementAgeInput ) {
    console.log('Please fill out birth year and annual amount!');
  } else if ( annualAmountInput ) {
    console.log('Please fill out birth year and retirement age!');
  } else {
    console.log('Please fill out the birth year, retirement age and annual amount!');
  }
});

function calculate() {
  birthYearInput = retirementAgeInput - (2018 - birthYearInput);

  totalAmount = annualAmountInput * Math.pow(1 + ( .06/12 ), ( 12 * birthYearInput ));
  console.log(totalAmount);
};