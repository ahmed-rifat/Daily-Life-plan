

document.getElementById('calculate-btn').addEventListener('click', function(){

 const totalIncome = elementsId('income');
 const foodPrice = elementsId('food');
 const rentPrice = elementsId('rent');
 const colthesPrice = elementsId('clothes');
 const totalExpenses = elementsId('total-expenses');
 let totalBalance = elementsId('balance');
 
 const finalExpenses = parseFloat(foodPrice.value) + parseFloat(rentPrice.value)+ parseFloat (colthesPrice.value);
 totalExpenses.innerText = finalExpenses;
 let finalBalance = parseFloat(totalIncome.value)- finalExpenses;
 totalBalance.innerText = finalBalance;
 
})

function elementsId( itemId){
    const itemPrice = document.getElementById(itemId);
        return itemPrice;
}

document.getElementById('save-btn').addEventListener('click', function(){
    
    const savings = elementsId('savings');
    let totalBalance = elementsId('balance');
    const remainingBalance = elementsId('remaining-balance');
    const savingsMoney = elementsId('saving-amount');
    
    const savingsAmount = (parseFloat(totalBalance.innerText) * parseFloat(savings.value))/100;
    savingsMoney.innerText = savingsAmount;
    const totalRemainigBalance = parseFloat(totalBalance.innerText) - parseFloat(savingsMoney.innerText);
    remainingBalance.innerText = totalRemainigBalance;
    
    

    
    // console.log(savingsAmount);
})