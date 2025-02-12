const formu = document.getElementById("formu")
const amount = document.getElementById("amount")
const term = document.getElementById("term")
const interest = document.getElementById("interest")
const result = document.getElementById("result")
let monthlyPayment = 0
let interestAmount = 0
let totalPayment = 0
let yearly = 0

const convertCommaToDot = (str) => {
  return str.replace(',', '.')
}

const calculateMortgage = (amount, term, rate) =>{
  console.log("base rate: ",rate)
  yearly = amount/term
  interestAmount = (amount/term)*rate
  totalPayment = yearly + interestAmount
  monthlyPayment = (yearly + interestAmount)/12
}

const updateUI = (type) =>{
  result.innerHTML= `
   <h3 class="text-xl font-medium text-white mb-1">Your results</h3>
        <p class="text-white/50 mb-4">Your results are shown below based on the information you provided.
        To adjust the results, edit the form and click “calculate repayments” again.</p>
        <div class="p-6 bg-[var(--slate-dark)] rounded-lg border-t-3 border-[var(--lime)]">
          <div>
            <p class="text-white/50 mb-1">Your monthly repayments</p>
            <p class="text-5xl text-[var(--lime)] font-bold">€${monthlyPayment}</p>
          </div>
          <div class="mt-6 pt-6 border-t-3 border-white/20">
            <p class="text-white/50">Total you'll repay over the term</p>
            <p class="text-white text-xl font-bold">€${totalPayment}</p>
          </div>
        </div>
  `
}

formu.addEventListener("submit", (event)=>{
  event.preventDefault()
  let radio = document.querySelector('input[type = radio]:checked')
  calculateMortgage(parseInt(amount.value), parseInt(term.value), parseFloat(convertCommaToDot(interest.value))/100)
  updateUI(radio)
})