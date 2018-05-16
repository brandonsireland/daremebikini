
window.onload = function () {

    var navBar = document.getElementById("#navBar");
    var sticky = navBar.offsetTop;

    function scrollNav() {
        if (window.pageYOffset > sticky) {
            navBar.classList.add("sticky");
        } else {
            navBar.classList.remove("sticky");
        }
    }

    // Scrolling Navigation
    window.onscroll = function () {
        scrollNav()
    };

    //Swiper Carousel
    var mySwiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
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
        autoplay: {
            delay:2000,
            disableOnInteraction:false,
        },
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });

};
//On Load ends

//Fade in Header Text
var el = document.querySelector('.js-fade');

if (el.classList.contains('is-paused')) {
    el.classList.remove('is-paused');
    console.log('is removed')
}

// Mobile Navigation Side Buttons
var mobiNav = false;
function mobileNav() {
    var x = document.getElementById("mobile-nav-icon");
    x.classList.toggle('open');
    if (x.classList.contains('open')) {
        openNav();
    } else {
        closeNav();
    }

};

function openNav() {
    this.mobileNav = mobileNav;
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    this.mobileNav = false;
    document.getElementById("mySidenav").style.width = "0";
}

// Waypoint animations

var animatedPhotoOne = document.getElementById('animatePhoto1');
var animatedPhotoTwo = document.getElementById('animatePhoto2');
var animatedShopSection = document.getElementById('animateShop');
var animatedInstaSection = document.getElementById('animateShopLook');

var waypoint = new Waypoint({
   element: document.getElementById('animatePhoto1'),
   handler: function (direction) {
      animatedPhotoOne.classList.add('animated','fadeInUp');
   },
   offset: '70%'
   
});

var waypoint2 = new Waypoint({
  element: document.getElementById('animatePhoto2'),
  handler: function (direction) {
     animatedPhotoTwo.classList.add('animated','fadeInUp');
  },
  offset: '60%'
  
});

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
    // var instaButton = instaPhoto.lastElementChild.id = 'InstaButton' + i;
    console.log(i)
}