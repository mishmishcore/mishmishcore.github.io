// burger

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('header__burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  });

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')

  });
});

// search

const form = document.querySelector('.header__search-container');
const search = document.querySelector('.header__search-icon');

search.addEventListener('click', () => {
    form.classList.add('open-search');
    search.classList.add('open-search');
});

form.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);
    let input = form.querySelector(".header__search-input");
    if (target.closest('.header__search-cancel')) {
        e.preventDefault();
        form.classList.remove('open-search');
        search.classList.remove('open-search');
        input.value = "";
    }
    if (target == input) {
        input.value = "";
        input.focus();
    }
});

// swiper

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  }
});

// tabs

document.querySelectorAll('.work__tabs-nav-button').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.work__tabs-nav-button').forEach(function (btn) {
      btn.classList.remove('work__tabs-nav-button_active')
    });
    e.currentTarget.classList.add('work__tabs-nav-button_active');

    document.querySelectorAll('.work__tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('work__tabs-item_active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('work__tabs-item_active');
  });
});

// accordion

$(".accordion").accordion({
  active: false,
  collapsible: true,
  icons: false,
  heightStyle: "content"
  });
