document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '5' && pinNumber === '12345'){
        console.log('Logged in');
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong Phone Number or Pin');
    }
});