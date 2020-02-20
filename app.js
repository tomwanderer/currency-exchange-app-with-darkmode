const currencyOneSelect = document.getElementById('currency-one');
const currencyTwoSelect = document.getElementById('currency-two');
const amount = document.getElementById('amount-1');
const amountTwo = document.getElementById('amount-2');
const buttonSwap = document.getElementById('btn');
const rate = document.getElementById('rate');

// Add event listeners

currencyOneSelect.addEventListener('change', calculate);
currencyTwoSelect.addEventListener('change', calculate);
amount.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);
buttonSwap.addEventListener('click', () => {
    const temp = currencyOneSelect.value;
    currencyOneSelect.value = currencyTwoSelect.value;
    currencyTwoSelect.value = temp;
});



function calculate() {

    const currencyOneSelectValue = currencyOneSelect.value;
    const currencyTwoSelectValue = currencyTwoSelect.value;

   
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOneSelectValue}`)
        .then(res => res.json())
        .then(data => {
            const rateData = data.rates[currencyTwoSelectValue];
            console.log(data);

            rate.innerText = `1 ${currencyOneSelectValue} = ${rateData} ${currencyTwoSelectValue}`;
            
            amountTwo.value = (amount.value * rateData).toFixed(2);
        
            

        });


};

calculate();