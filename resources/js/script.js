(function(window){
   
//Fade in Header Text
const el = document.querySelector('.js-fade');

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


// Header Swiper

const headerImgArray = [
    'assets/img/frontpage/_MG_6979.jpg',
    'assets/img/frontpage/_5000022.jpg',
    'assets/img/frontpage/_5000030.jpg',
    'assets/img/frontpage/_5000033.jpg',
    'assets/img/frontpage/_5000131.jpg',
    'assets/img/frontpage/_5000133.jpg',
    'assets/img/frontpage/_5000155.jpg',
    'assets/img/frontpage/_5000158.jpg',
    'assets/img/frontpage/_5000164.jpg',
    'assets/img/frontpage/_5000286.jpg',
    'assets/img/frontpage/_5000313.jpg',
    'assets/img/frontpage/_5000343.jpg',
    'assets/img/frontpage/_5000383.jpg',
    'assets/img/frontpage/_5000385.jpg',
    'assets/img/frontpage/_5000404.jpg',
    'assets/img/frontpage/_5000475.jpg',
    'assets/img/frontpage/_5000476.jpg',
    'assets/img/frontpage/_5000526.jpg',
    'assets/img/frontpage/_5000629.jpg',
    'assets/img/frontpage/_5000690.jpg',
    'assets/img/frontpage/_5000691.jpg',
    'assets/img/frontpage/_5000702.jpg',
    'assets/img/frontpage/_5000853.jpg',
    'assets/img/frontpage/_5000854.jpg',
    'assets/img/frontpage/_5000859.jpg',
    'assets/img/frontpage/_5000872.jpg',
    'assets/img/frontpage/_5000880.jpg',
    'assets/img/frontpage/_5000896.jpg',
    'assets/img/frontpage/_5000897.jpg',
    'assets/img/frontpage/_5000910.jpg',
    'assets/img/frontpage/_5000968.jpg',
    'assets/img/frontpage/_5000994.jpg',
    'assets/img/frontpage/_5001009.jpg',
    'assets/img/frontpage/_5001182.jpg',
    'assets/img/frontpage/_5001315.jpg',
    'assets/img/frontpage/_5001329.jpg',
    'assets/img/frontpage/_5001330.jpg',
    'assets/img/frontpage/_5001411.jpg',
    'assets/img/frontpage/_5001418.jpg',
    'assets/img/frontpage/_5001439.jpg',
    'assets/img/frontpage/_5001509.jpg',
    'assets/img/frontpage/_5001519.jpg',
    'assets/img/frontpage/_5001523.jpg',
    'assets/img/frontpage/_5008720.jpg',
    'assets/img/frontpage/_5008723.jpg',
    'assets/img/frontpage/_5008732.jpg',
    'assets/img/frontpage/_5008734.jpg',
    'assets/img/frontpage/_5008740.jpg',
    'assets/img/frontpage/_5008744.jpg',
    'assets/img/frontpage/_5008747.jpg',
    'assets/img/frontpage/_5008765.jpg',
    'assets/img/frontpage/_5008770.jpg',
    'assets/img/frontpage/_5008771.jpg',
    'assets/img/frontpage/_5008799.jpg',
    'assets/img/frontpage/_5008800.jpg',
    'assets/img/frontpage/_5008813.jpg',
    'assets/img/frontpage/_5008816.jpg',
    'assets/img/frontpage/_5008822.jpg',
    'assets/img/frontpage/_5008838.jpg',
    'assets/img/frontpage/_5008840.jpg',
    'assets/img/frontpage/_5008844.jpg',
    'assets/img/frontpage/_5008894.jpg',
    'assets/img/frontpage/_5008895.jpg',
    'assets/img/frontpage/_5008898.jpg',
    'assets/img/frontpage/_5008930.jpg',
    'assets/img/frontpage/_5008952.jpg',
    'assets/img/frontpage/_5008957.jpg',
    'assets/img/frontpage/_5008965.jpg',
    'assets/img/frontpage/_5008994.jpg',
    'assets/img/frontpage/_5009024.jpg',
    'assets/img/frontpage/_5009075.jpg',
    'assets/img/frontpage/_5009089.jpg',
    'assets/img/frontpage/_5009125.jpg',
    'assets/img/frontpage/_5009131.jpg',
    'assets/img/frontpage/_5009166.jpg',
    'assets/img/frontpage/_5009182.jpg',
    'assets/img/frontpage/_5009232.jpg',
    'assets/img/frontpage/_5009391.jpg',
    'assets/img/frontpage/_5009403.jpg',
    'assets/img/frontpage/_5009469.jpg',
    'assets/img/frontpage/_5009528.jpg',
    'assets/img/frontpage/_5009551.jpg',
    'assets/img/frontpage/_5009570.jpg',
    'assets/img/frontpage/_5009579.jpg',
    'assets/img/frontpage/_5009585.jpg',
    'assets/img/frontpage/_5009625.jpg',
    'assets/img/frontpage/_5009626.jpg',
    'assets/img/frontpage/_5009678.jpg',
    'assets/img/frontpage/_5009773.jpg',
    'assets/img/frontpage/_5009890.jpg',
    'assets/img/frontpage/_5009913.jpg',
    'assets/img/frontpage/_5009935.jpg',
    'assets/img/frontpage/_5009964.jpg',
    'assets/img/frontpage/_5009993.jpg',
    'assets/img/frontpage/_MG_6457.JPG',
    'assets/img/frontpage/_MG_6459.JPG',
    'assets/img/frontpage/_MG_6471.JPG',
    'assets/img/frontpage/_MG_6472.JPG',
    'assets/img/frontpage/_MG_6639.JPG',
    'assets/img/frontpage/_MG_6643.JPG',
    'assets/img/frontpage/_MG_6793.JPG',
    'assets/img/frontpage/_MG_6812.JPG',
    'assets/img/frontpage/_MG_6873.JPG',
    'assets/img/frontpage/_MG_6876.JPG',
];

createImgElements = () => {
    for(let i = 0; i < 10; i++){
        const headSwiper = document.querySelector('#headerSwiper');
        let randomNum = Math.floor(Math.random()*headerImgArray.length);
        const nodeA  = document.createElement('a');
        const nodeImg = document.createElement('img');
        nodeA.classList.add('swiper-slide');
        nodeImg.classList.add('img-fluid');
        nodeImg.setAttribute('src', headerImgArray[randomNum])
        headSwiper.appendChild(nodeA);
        nodeA.appendChild(nodeImg);
    }
}
createImgElements();

//Swiper Carousel
var headerSwiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    lazy: true,
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
  var instaSwiper = new Swiper('.swiper-two', {
    slidesPerView: 4,
    loop : true,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      412: {
        slidesPerView: 1,
      }
    }
  });


jarallax(document.querySelector('#jarallax'), {
    speed: 0.2,
});
jarallax(document.querySelector('#bottomJarallax'), {
    speed: 0.2
});

// Shop the look button loop
for (i = 0; i < document.getElementsByClassName('insta-photo').length; i++) {
    var instaPhoto = document.getElementsByClassName('insta-photo')[i];
    instaPhoto.id = 'instaPhoto' + i;
}

})(window);