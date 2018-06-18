(function(){
   
    //Swiper Carousel
    var headerSwiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    //Insta Shop Carousel
    var carouselSwiper = new Swiper('.s2', {
        slidesPerView: 4,
        loop: true,
        // autoplay: {
        //     delay:2000,
        //     disableOnInteraction:false,
        // },
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
        // breakpoints: {
        //     1024: {
        //         slidesPerView: 3,
        //         spaceBetween: 40,
        //     },
        //     768: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //     },
        //     640: {
        //         slidesPerView: 2,
        //         spaceBetween: 20,
        //     },
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 10,
        //     }
        // }
    });

//Fade in Header Text
var el = document.querySelector('.js-fade');

if (el.classList.contains('is-paused')) {
    el.classList.remove('is-paused');
}

// // Mobile Navigation Side Button

const sidenav = document.querySelector('#sideNav');
const navButton = document.querySelector('#mobileNavButton');
navButton.addEventListener('click', clickNav = () => {
    navButton.classList.toggle('open');
    sidenav.classList.toggle('open');
});


// Waypoint animations
var animatedShopSection = document.getElementById('animateShop');
var animatedInstaSection = document.getElementById('animateShopLook');


var waypointThree = new Waypoint({
   element: document.getElementById('animateShop'),
   handler: function (direction) {
      animatedShopSection.classList.add('animated','fadeIn');
   },
   offset: '60%'
   
});

var waypointFour = new Waypoint({
    element: document.getElementById('animateShopLook'),
    handler: function (direction) {
       animatedInstaSection.classList.add('animated','fadeIn');
    },
    offset: '60%'
});

// Shop the look button loop
for (i = 0; i < document.getElementsByClassName('insta-photo').length; i++) {
    var instaPhoto = document.getElementsByClassName('insta-photo')[i];
    instaPhoto.id = 'instaPhoto' + i;
}

})();