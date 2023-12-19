document.getElementById('login-button').addEventListener('click', function(){
    const emeilText = document.getElementById('emeil-field');
    const emeil = emeilText.value;
    
    const passwordText = document.getElementById('password-field');
    const password = passwordText.value;

    if(emeil === 'tasnim@.com' && password === '7075'){
        window. location. assign('bank-inside.html');
    }
    else{
        alert('Enter Valied emeil and PassWord');
    }
})