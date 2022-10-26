const elForm = document.querySelector('.js-form');
const elEmail = document.querySelector('.js-email');
const elPass = document.querySelector('.js-pass');


elForm.addEventListener('submit', (evt) => {
   evt.preventDefault();
     fetch('https://reqres.in/api/login', {
      method: 'Post',
      headers: {
         'Content-type' : 'application/json',
      },
      body: JSON.stringify({
         email: elEmail.value,
         password: elPass.value, 
      }),
   })
   .then((res) => res.json())
   .then((data) => {
      if(data.token){
         localStorage.setItem('token', data.token);
         window.location.replace('index.html')
      }
   })
})