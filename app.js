//hide all tab contexts

document.getElementById('customerContext').style.display='block';
document.getElementById('productContext').style.display='none';
document.getElementById('ordersContext').style.display='none';

// manage tabs

document.getElementById('customerTab').addEventListener('click',function(event){
  event.preventDefault();
  document.getElementById('customerContext').style.display='block';
  document.getElementById('productContext').style.display='none';
  document.getElementById('ordersContext').style.display='none';

  this.classList.add('active');

  document.getElementById('productTab').classList.remove('active');
  document.getElementById('orderTab').classList.remove('active');
  
})

document.getElementById('productTab').addEventListener('click',function(event){
  event.preventDefault();
  document.getElementById('customerContext').style.display='none';
  document.getElementById('productContext').style.display='block';
  document.getElementById('ordersContext').style.display='none';

  this.classList.add('active');

  document.getElementById('customerTab').classList.remove('active');
  document.getElementById('orderTab').classList.remove('active');
  
})

document.getElementById('orderTab').addEventListener('click',function(event){
  event.preventDefault();
  document.getElementById('customerContext').style.display='none';
  document.getElementById('productContext').style.display='none';
  document.getElementById('ordersContext').style.display='block';

  this.classList.add('active');

  document.getElementById('productTab').classList.remove('active');
  document.getElementById('customerTab').classList.remove('active');
  
})

// Register with email & password

document.getElementById('signupButton').addEventListener('click',function(event){
  document.getElementById('success-reg').style.display='none';
  document.getElementById('error-reg').style.display='none';
  
});

function register() {
  
    let email = document.getElementById('registerUsername').value;
    let password = document.getElementById('registerPassword').value;

    if(!email && !password){
      alert('Provide Email & Password')
    }
  
}



