// 2. A function named homeLoanPayment that takes 3 arguments and returns the monthly payment to the main program.  Term can only be 15 or 30 years

function houseLoanPayment(houseLoanAmount, houseLoanMonths, houseInterestRate) {
  let houseLoanPaymentAnswer = 0
  if (houseLoanMonths == 15) {
      houseLoanPaymentAnswer = (houseLoanAmount / (houseLoanMonths * 12)) * ((houseInterestRate / 100) + 1)
    }else if (houseLoanMonths == 30) {
      houseLoanPaymentAnswer = (houseLoanAmount / (houseLoanMonths * 12)) * ((houseInterestRate / 100) + 1)
    } else{
    houseLoanPaymentAnswer = "No Results"
    }
    return houseLoanPaymentAnswer
    }