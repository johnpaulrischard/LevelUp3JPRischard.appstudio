// 3. Main program that asks the user which calculator they want to use, gets their data and calls the function.
// 4. Main program that gets the answer back from the function and outputs it to an alert in this format
// 5. The program must keep running until the user says they want to stop running it.
var greeting = prompt("Enter 'car' for the car loan function, or 'house' for the house loan function")
console.log(greeting)
if (greeting == 'car') {
  do {
    var carLoanAmount = prompt("Enter the car loan amount (no commas!).")
    console.log(carLoanAmount)
    var carLoanMonths = prompt("Enter the total months on the loan (ex. for 3 years type '36').")
    console.log(carLoanMonths)
    var carInterestRate = prompt("Enter the car loan rate (no % sign -- ex. 5% as 0.05).")
    console.log(carInterestRate)
  let carLoanPaymentAnswer = carLoanPayment(carLoanAmount, carLoanMonths, carInterestRate)
  alert(`A car loan payment for ${carLoanAmount} over ${carLoanMonths} at ${carInterestRate} would have a monthly payment of ${carLoanPaymentAnswer}.`)
  answer = prompt("To make another input please type 'Continue'. If not, please type 'Quit'.")
  } while (answer == 'Continue');
    
} else if (greeting == 'house') {
  do {
  var houseLoanAmount = prompt("Enter the house loan amount (no commas!).")
    console.log(houseLoanAmount)
    var houseLoanMonths = prompt("Enter the total months on the loan (ex. for 3 years type '36').")
    console.log(houseLoanMonths)
    var houseInterestRate = prompt("Enter the house loan rate (no % sign -- ex. 5% as 0.05).")
    console.log(houseInterestRate)
  let houseLoanPaymentAnswer = houseLoanPayment(houseLoanAmount, houseLoanMonths, houseInterestRate)
  alert(`A house loan payment for ${houseLoanAmount} over ${houseLoanMonths} at ${houseInterestRate} would have a monthly payment of ${houseLoanPaymentAnswer}.`)
  answer = prompt("To make another input please type 'Continue'. If not, please type 'Quit'.")
  } while (answer == 'Continue');
} else if (answer == 'Quit') {
  alert('Have a great day! You will no longer receive this prompt.')
  }