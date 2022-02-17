// calculate btn clcik
document.getElementById('calculate-btn').addEventListener('click', function(){
  balanceOutput();
})

// save btn clcik
document.getElementById('save-btn').addEventListener('click', function(){
remainingBalanceOutput()

})

// all element called by this function

function elementsId( itemId){
    const itemPrice = document.getElementById(itemId);
        return itemPrice;
}

// balance output function
function balanceOutput(){
    const totalIncome = elementsId('income');
 const foodPrice = elementsId('food');
 const rentPrice = elementsId('rent');
 const colthesPrice = elementsId('clothes');
 const totalExpenses = elementsId('total-expenses');
 let totalBalance = elementsId('balance');
 
 // Error notification show start
 if (isNaN(totalIncome.value)) {
    window.alert("please entered income value a number");
    return false;
  }else if(totalIncome.value<0){
    window.alert("please enter a positive number");
}
  else if (isNaN(foodPrice.value)) {
    window.alert("please entered food value a number");
    return false;
  }else if(foodPrice.value<0){
    window.alert("please enter a positive number");
}
   else if (isNaN(rentPrice.value)) {
    window.alert("please entered rent value a number");
    return false;
  }else if(rentPrice.value<0){
    window.alert("please enter a positive number");
}
   else if (isNaN(colthesPrice.value)) {
    window.alert("please entered clothes value a number");
    return false;
  }else if(colthesPrice.value<0){
    window.alert("please enter a positive number");
}
//  error notification show end
  else{
    const finalExpenses = parseFloat(foodPrice.value) + parseFloat(rentPrice.value)+ parseFloat (colthesPrice.value);
    

    if(finalExpenses > totalIncome.value){
        window.alert("you can't expense more than your income");
    }
    else{
    totalExpenses.innerText = finalExpenses;
    let finalBalance = parseFloat(totalIncome.value)- finalExpenses;
    totalBalance.innerText = finalBalance;
    return finalBalance; 
}
}
}

 
// remaining balace function
function remainingBalanceOutput (){
    const totalIncome = elementsId('income');

    const savings = elementsId('savings');
    let totalBalance = elementsId('balance');
    const remainingBalance = elementsId('remaining-balance');
    const savingsMoney = elementsId('saving-amount');

    // Error notification show
    if(isNaN(savings.value)){
        window.alert('please entered save value a number');
        return false;
    } else if(savings.value<0){
        window.alert("please enter a positive number");
    }
    else{

    const savingsAmount = (parseFloat(totalIncome.value) * parseFloat(savings.value))/100;
    
     // Error notification show
    if(savingsAmount > totalBalance.innerText){
      window.alert ("saving amount can't be higher than Balance");
    } else{
        savingsMoney.innerText = savingsAmount;
        const totalRemainigBalance = parseFloat(totalBalance.innerText) - parseFloat(savingsMoney.innerText);
        remainingBalance.innerText = totalRemainigBalance;
            return totalRemainigBalance;
    }
}
}
  
     

   



