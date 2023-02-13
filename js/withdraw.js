document.getElementById('withdraw-btn').addEventListener('click', function(){
    // step 2 get the input of withdraw;
    const withdrawMoney = document.getElementById('withdraw-money');
    const wantMoney = withdrawMoney.value ;
    const wantMoneyString = parseFloat(wantMoney);
    if(isNaN(wantMoneyString)){
        alert('put amount')
        return;
    }
    // step 3 get total withdraw
    const getWithdrawBalance = document.getElementById('withdrawBalance');
    const previewsTotalWithdraw = getWithdrawBalance.innerText;
    const convertTotalWithdraw = parseFloat(previewsTotalWithdraw);
    console.log(convertTotalWithdraw);
    // step 4
    const currentWithdrawTotal = convertTotalWithdraw + wantMoneyString;
    getWithdrawBalance.innerText = currentWithdrawTotal;
    // step 5
    const balanceTotalElement= document.getElementById('totalBalance');
    const previewsBalanceTotalString = balanceTotalElement.innerText
    const previewsBalanceTotal = parseFloat(previewsBalanceTotalString);
    
    if(wantMoneyString >= previewsBalanceTotal || wantMoneyString < 0){
        alert('insufficient Balance')
        return;
    }
    const lastBalance = previewsBalanceTotal - wantMoneyString;
    balanceTotalElement.innerText = lastBalance;
    
    withdrawMoney.value = '';

    
})