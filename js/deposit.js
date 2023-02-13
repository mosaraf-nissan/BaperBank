// step 1

document.getElementById('deposit-btn').addEventListener('click', function(){
    // step 2
    const getDeposit = document.getElementById('deposit-money');
    const newDepositMoney = getDeposit.value;
    const convertToNumber = parseFloat(newDepositMoney);
    // step 3
    const DepositTotal = document.getElementById('totalDeposit');
    const previewsDepositTotalMoney = DepositTotal.innerText;
    const convertPreviewsDepositTotalMoney = parseFloat(previewsDepositTotalMoney);
    // step number -4:- 
    const currentDeposit = convertPreviewsDepositTotalMoney + convertToNumber;
    DepositTotal.innerText = currentDeposit;
    // step number 5 :-
    const totalBalanceElement = document.getElementById('totalBalance');
    const totalBalanceElementString = totalBalanceElement.innerText;
    const previewsTotalBalance = parseFloat(totalBalanceElementString);
    // step 6
    const currentTotalBalance = previewsTotalBalance + convertToNumber
    totalBalanceElement.innerText = currentTotalBalance;

    // step -7 
    getDeposit.value = '';
})