

document.getElementById('calculate-btn').addEventListener('click', function(){
  
  balanceOutput();

 
})
document.getElementById('save-btn').addEventListener('click', function(){
 
    
remainingBalanceOutput()

})




function elementsId( itemId){
    const itemPrice = document.getElementById(itemId);
        return itemPrice;
}

function balanceOutput(){
    const totalIncome = elementsId('income');
 const foodPrice = elementsId('food');
 const rentPrice = elementsId('rent');
 const colthesPrice = elementsId('clothes');
 const totalExpenses = elementsId('total-expenses');
 let totalBalance = elementsId('balance');
 
 if (isNaN(totalIncome.value)) {
    window.alert("You have entered not a number");
    return false;
  } 
 const finalExpenses = parseFloat(foodPrice.value) + parseFloat(rentPrice.value)+ parseFloat (colthesPrice.value);
 totalExpenses.innerText = finalExpenses;
 let finalBalance = parseFloat(totalIncome.value)- finalExpenses;
 totalBalance.innerText = finalBalance;
 return finalBalance;


}



function remainingBalanceOutput (){
    const totalIncome = elementsId('income');

    const savings = elementsId('savings');
    let totalBalance = elementsId('balance');
    const remainingBalance = elementsId('remaining-balance');
    const savingsMoney = elementsId('saving-amount');

    if (isNaN(savings.value)) {
        window.alert("please enetered a number");
        return false;
      } else{
    const savingsAmount = (parseFloat(totalIncome.value) * parseFloat(savings.value))/100;
    
    
     // Error notification show
    if(savingsAmount > totalBalance.innerText){
       alert ("savings can't be higher than Balance");
    } else{
        savingsMoney.innerText = savingsAmount;
        const totalRemainigBalance = parseFloat(totalBalance.innerText) - parseFloat(savingsMoney.innerText);
        remainingBalance.innerText = totalRemainigBalance;
            return totalRemainigBalance;
    }
}
}  
     

   



