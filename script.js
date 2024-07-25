'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));

// btnsOpenModal.addEventListener('click',function(){
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// });
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//scroll button

btnScrollTo.addEventListener('click',function(){

  section1.scrollIntoView({behavior : 'smooth'
  });
})

document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();
  
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'
    });
  }
});

const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');


tabsContainer.addEventListener('click',function(e){
  e.preventDefault();
  // console.log(e.target);
  // if(e.target.classList.contains('operations__tab')){
  //   const id = e.target.getAttribute('data-tab');
  //   console.log(id);
  //   document.querySelector.add(`btn operations__tab operations__tab--${id}`);
  // }

  const clicked = e.target.closest('.operations__tab');
  if(!clicked) return;
  //active tab
  tabs.forEach(tb => tb.classList.remove('operations__tab--active'));

  clicked.classList.add('operations__tab--active');

  //remove tabs
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));

  //activate content area

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});
