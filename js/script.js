/* SLIDER */ 

var swiper = new Swiper('.swiper-container', {
      pagination: {
    el: '.swiper-pagination',
    clickable: true
      },
    });


/* WORK-TABS */
    
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work__btn').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function (e) {
        e.classList.remove('tab-content--active')
        document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
      })
    })
  
 e.addEventListener('click', function (e) {
      const tabDafault = e.currentTarget.dataset.default;
      document.querySelectorAll('.work__btn').forEach(function (e) {
        e.classList.remove('work__btn--default')
        document.querySelector(`[data-path='${tabDafault}']`).classList.add('work__btn--default');
      })
    })

  })
})


/* Accordion */

  $( function() {
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: 'content',
    });
  } );


/* Burger-menu */
  
const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.header-nav');

burgerBtn.addEventListener('click', () => {
  menuBurger.classList.add('burger-active')
});

menuClose.addEventListener('click', () => {
  menuBurger.classList.remove('burger-active')
});