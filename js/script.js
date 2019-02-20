
/* MORTGAGE PAYMENT CALCULATOR */

function getValues() {
  let propertyPrice = document.getElementById("calc_price").value;
  let interestRate = document.getElementById("calc_interest").value;
  let amortization = document.getElementById("calc_amort").value;
  let total = monthlyPayment(propertyPrice, interestRate, amortization);

  document.getElementById("calc_amt").value = "$" + total.toFixed(2);
}

function monthlyPayment(propertyPrice, interestRate, amortization) {
  let monthlyInterestRate = interestRate / 100 / 12;
  monthlyPayment = propertyPrice * monthlyInterestRate / (1 - (1 / (Math.pow((1 + monthlyInterestRate), amortization * 12))));
  return monthlyPayment;
}

/*FORM VALIDATION WITH CUSTOM ALERT USING SWEETALERT */

  function checkValidation() {

 // const contactUsForm = document.getElementById('contactUsForm');

  const emailField = document.getElementById('form-contact-email');

  const submitButton = document.getElementById('submit-contact-form');

  /* RETURNS BOOLEAN VALUE IF EMAIL FIELD IS VALID FORMAT*/
  isValidEmail = emailField.checkValidity();

if (isValidEmail) {
  document.getElementById("contactUsForm").addEventListener('submit', customAlert);

}
  }
  
function customAlert() {
swal({
  title: "Success!",
  text: "Your email has been sent!",
  icon: "success",
  timer: 20000,
  showCloseButton: true,
  closeOnClickOutside: false
})
}





