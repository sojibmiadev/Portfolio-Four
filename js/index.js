
// responsive navbar here 
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    // menu.classList.toggle('');
    navlist.classList.toggle('open');
};
window.onscroll = () => {
    // menu.classList.toggle('');
    navlist.classList.remove('open');
};


///// scroll section menu hover and active link start
//  let list = document.querySelector('nav li');
//  function active(){
//     list.forEach((i) => 
//     i.classList.remove('active'));
//     this.classList.add('active');
//  }

//  list.forEach((i) => 
//  i.addEventListener('click',active));