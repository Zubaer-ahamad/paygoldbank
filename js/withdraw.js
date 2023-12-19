// step-1
document.getElementById('withdraw-btn').addEventListener('click', function(){
    //step-2
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdraw = parseFloat(withdrawFieldString);
    if(isNaN(newWithdraw)){
        return alert('Enter valied number.')
    }
    // step-7
    withdrawField.value = '';

    //step-3
    const withdrawMoneyElement = document.getElementById('withdraw-money');
    const withdrawMoneyString = withdrawMoneyElement.innerText;
    const withdrawMoney = parseFloat(withdrawMoneyString);

    //step-5
    const myBalanceMoneyElement = document.getElementById('balance-money');
    const myBalanceMoneyString = myBalanceMoneyElement.innerText;
    const myBalanceMoney = parseFloat(myBalanceMoneyString);
    if(newWithdraw > myBalanceMoney){
        alert('You Have Not Enfough Balance.');
        return;
    };
    
    //step-4
    const newWithdrawMoney = newWithdraw + withdrawMoney;
    withdrawMoneyElement.innerText = newWithdrawMoney;
    
    // step-6
    const balanceLeftAfter = myBalanceMoney - newWithdraw;
    // step-6.5
    myBalanceMoneyElement.innerText = balanceLeftAfter;
})