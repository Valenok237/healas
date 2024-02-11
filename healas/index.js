const menu = document.querySelector('.header-nav');
const menuBurger = document.querySelector('.burger-menu');
const menuList = document.querySelector('.header-nav__list');
const menuClose = document.querySelector('.header-close');

menuBurger.addEventListener('click', () => {
    menu.classList.add('header-active');
});
menuList.addEventListener('click', () => {
    menu.classList.remove('header-active');
});
menuClose.addEventListener('click', () => {
    menu.classList.remove('header-active');
});


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
let options = {
    threshold: [0.5] 
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}