document.getElementById('deposite-btn').addEventListener('click', function(){

    
    const depositeField = document.getElementById('deposite-field');
    const previousDepositeField = depositeField.value;
    const newDepositeField = parseFloat(previousDepositeField);
    if(isNaN(newDepositeField)){
        return alert('Enter Valied Number.');
    }


    const previousDepositMoney = document.getElementById('deposite-money');
    const newDepositeMoney = previousDepositMoney.innerText;
    const depositeMoney = parseFloat(newDepositeMoney)


    const currentDepositeTotal = depositeMoney + newDepositeField;
    previousDepositMoney.innerText = currentDepositeTotal;


    const totalMoney = document.getElementById('balance-money');
    const bankTotalMoney = totalMoney.innerText;
    const bankTotalMoneyString = parseFloat(bankTotalMoney);


    const dipositeTotalMoney = bankTotalMoneyString + newDepositeField;
    totalMoney.innerText = dipositeTotalMoney;


    depositeField.value = '';
})