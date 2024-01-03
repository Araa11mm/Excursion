document.addEventListener("DOMContentLoaded", function () {

    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      speed: 500,
      // spaceBetween: 20,
      // slidesPerView: 5,
      // slidesPerGroup: 5,
  
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {

        310: {
          slidesPerView: 2.4,
          spaceBetween: 10,
          slidesPerGroup: 2,
        },

        420: {
          slidesPerView: 2.7,
          spaceBetween: 10,
          slidesPerGroup: 2,
        },

        500: {
          slidesPerView: 3.5,
          spaceBetween: 10,
          slidesPerGroup: 2,
        },

        600: {
          slidesPerView: 3.5,
          spaceBetween: 10,
          slidesPerGroup: 2,
        },

        750: {
          slidesPerView: 4.2,
          spaceBetween: 10,
          slidesPerGroup: 2,
        },
  
        977: {
          slidesPerView: 5,
          spaceBetween: 10,
        },

        1100: {
          slidesPerView: 5,
          spaceBetween: 10,
          slidesPerGroup: 5,
        },
      }
    });


    const mobile2 = new Swiper('.swiperGallery', {
      direction: 'horizontal',
      loop: false,
      speed: 500,
      // slidesPerView: 3, 
      // spaceBetween: 20,
      // slidesPerGroup: 3, 
  
      navigation: {
          prevEl: '.btnGallery1',
          nextEl: '.btnGallery2',
      },

      breakpoints: {

        300: {
          slidesPerView: 1.1,
          spaceBetween: 10,
          slidesPerGroup: 1,
        },

        400: {
          slidesPerView: 1.2,
          spaceBetween: 10,
          slidesPerGroup: 1,
        },

        700: {
          slidesPerView: 2.1,
          spaceBetween: 10,
          slidesPerGroup: 2,
        },
      }
  }); 


    const mobile = new Swiper('.swiper2', {
      direction: 'horizontal',
      loop: false,
      speed: 600,
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
  
        navigation: {
          nextEl: '.btn2',
          prevEl: '.btn1',
        },
  
        breakpoints: {

          320: {
            slidesPerView: 1.1,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },

          400: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            slidesPerGroup: 2,
          },

          605: {
            slidesPerView: 1.7,
            spaceBetween: 10,
            slidesPerGroup: 2,
          },
  
          758: {
            slidesPerView: 2.4,
            spaceBetween: 10,
            slidesPerGroup: 2,
          },
  
          960: {
            slidesPerView: 2.5,
            spaceBetween: 10,
            slidesPerGroup: 2,
          },
    
          1438: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }
    })

});






