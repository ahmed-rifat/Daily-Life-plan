

document.getElementById('calculate-btn').addEventListener('click', function(){

 const totalIncome = document.getElementById('income');
 const foodPrice = document.getElementById('food');
 const rentPrice = document.getElementById('rent');
 const colthesPrice = document.getElementById('clothes');
 const totalExpenses = document.getElementById('total-expenses');
 let totalBalance = document.getElementById('balance');
 
 const finalExpenses = parseFloat(foodPrice.value) + parseFloat(rentPrice.value)+ parseFloat (colthesPrice.value);
 totalExpenses.innerText = finalExpenses;
 let finalBalance = parseFloat(totalIncome.value)- finalExpenses;
 totalBalance.innerText = finalBalance;
 
})

document.getElementById('save-btn').addEventListener('click', function(){
    
    const savings = document.getElementById('savings');
    let totalBalance = document.getElementById('balance');
    const remainingBalance = document.getElementById('remaining-balance');
    const savingsMoney = document.getElementById('saving-amount');
    
    const savingsAmount = (parseFloat(totalBalance.innerText) * parseFloat(savings.value))/100;
    savingsMoney.innerText = savingsAmount;
    const totalRemainigBalance = parseFloat(totalBalance.innerText) - parseFloat(savingsMoney.innerText);
    remainingBalance.innerText = totalRemainigBalance;
    
    

    
    // console.log(savingsAmount);
})