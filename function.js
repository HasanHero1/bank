// Deposite Amount function Start. 

document.getElementById('depositBtn').addEventListener('click', function(){

    const depositField = document.getElementById('depositAmount');
    const depositString = depositField.value;
    const depositAmount = parseFloat(depositString);
    
    const oldDeposit = document.getElementById('oldDepositAmount');
    const oldDepositAmount = oldDeposit.innerText;
    const newDeposit = parseFloat(oldDepositAmount);
    
    const newDepositAmount = depositAmount + newDeposit;
    oldDeposit.innerText = newDepositAmount;

    const oldBalance = document.getElementById('balance');
    const balanceString = oldBalance.innerText;
    const balance = parseFloat(balanceString);

    const newBalance = balance + depositAmount;
    oldBalance.innerText = newBalance;

    depositField.value = '';
})

// Withdraw Amount function Start.

document.getElementById('withdrawBtn').addEventListener('click', function (){

    const withdrawField = document.getElementById('withdrawAmount');
    const withdrawString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawString);

    withdrawField.value = '';

    const oldWithdraw = document.getElementById('withdraw');
    const oldWithdrawString = oldWithdraw.innerText;
    const oldWithdrawAmount = parseFloat(oldWithdrawString);

    const oldBalance = document.getElementById('balance');
    const balanceString = oldBalance.innerText;
    const balance = parseFloat(balanceString);

    if(withdrawAmount <= balance){
        const withdraw = withdrawAmount + oldWithdrawAmount;
        oldWithdraw.innerText = withdraw;

        const newBalance = balance - withdrawAmount;
        oldBalance.innerText = newBalance;
    }else{
        alert('You dont have motch mony to Withdraw, Please check your currant blance.')
    }

    
})