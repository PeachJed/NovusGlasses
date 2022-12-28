/**
* Template Name: Yummy - v1.2.1
* Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

// document.getElementById('color-selector-1').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img1').src = color;
// });

// document.getElementById('color-selector-2').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img2').src = color;
// });

// document.getElementById('color-selector-3').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-4').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-5').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-6').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-7').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-8').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-9').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-10').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-11').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-12').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-13').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-14').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-15').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-16').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-17').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-18').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-19').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-20').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-21').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-22').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-23').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-24').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img').src = color;
// });

// document.getElementById('color-selector-1').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img1').src = color;
// });

// document.getElementById('color-selector-2').addEventListener('change', function() {
//   var color = this.value;
//   document.querySelector('.glasses-img2').src = color;
// });