
// localStorage.removeItem('test')

// localStorage.clear();

window.addEventListener('DOMContentLoaded', function() {
  
  let chekbox = document.getElementById('rememberMe'),
      change = document.getElementById('change'),
      form =document.getElementsByTagName('form')[0];
     
  if (localStorage.getItem('isChecked') === "true") {
    chekbox.checked = true;
  }
  if(localStorage.getItem('bg') ==='change') {
    form.style.backgroundColor = '#fbe90e'
  }
  chekbox.addEventListener('click', function() {
    localStorage.setItem('isChecked', true);
  })
  change.addEventListener('click', function(){
    localStorage.setItem('bg', 'change');
    form.style.backgroundColor ='#fbe90e'
  })
  let persone = {
    name: "Vadim",
    age: 24,
    about: ['book', 'pizza']
  }
  let locPersone = JSON.stringify(persone);
  localStorage.setItem('Vadim', locPersone);
  console.log(JSON.parse(localStorage.getItem('Vadim')))
})