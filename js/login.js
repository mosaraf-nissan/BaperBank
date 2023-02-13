// add the event handler on the login button step -1
document.getElementById('login-btn').addEventListener('click', function(){
    // step :- 2 get the email address from the input field.
    // we have to use .value for getting input text from the input field.
    const userData = document.getElementById('user-data');
    const userMail = userData.value;
    console.log(userMail);
    // step :- 3 get the password from the input field via same method
    const getPassword = document.getElementById('input-password');
    const userPassword = getPassword.value;
    console.log(userPassword);

    // step-4 email and password verify. (the method is only for learning purpose do not use in the professional place.)
    if(userMail ==='jnnissanm@gmail.com' && userPassword === '226006' ){
        window.location.href = 'bank.html';
    }
    else{
        alert('Incorrect Password or email');
    }
    
})