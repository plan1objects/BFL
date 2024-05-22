const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const swiper1 = new Swiper("#p_banner .mySwiper", {
  // effect: 'fade',
  slidesPerView: 1.5,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: "#p_banner .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#p_banner .swiper-button-next",
    prevEl: "#p_banner .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,  //브라우저가 768보다 클 때
      spaceBetween: 0,
    },
    375: {
      slidesPerView: 1,  //브라우저가 768보다 클 때
      spaceBetween: 0,
    },
    425: {
      slidesPerView: 1,  //브라우저가 768보다 클 때
      spaceBetween: 0,
    }, 
    580: {
      slidesPerView: 1,  //브라우저가 768보다 클 때
      spaceBetween: 0,
    },   
    768: {
      slidesPerView: 1,  //브라우저가 768보다 클 때
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1.2,  //브라우저가 1024보다 클 때
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 1.5,  //브라우저가 1024보다 클 때
      spaceBetween: 10,
    },
  }
  
});

    const swiper2 = new Swiper("#event_banner .mySwiper", {
      effect: 'fade',
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: "#event_banner .swiper-pagination",
      },
    });

    // const bgColor = ['#000','#62645A'];
    const topbannerAll = document.querySelectorAll('#agreePopup .swiper-slide');
    let count = 1;
    
  

    const swiper3 = new Swiper("#agreePopup.mySwiper", {
      direction: "vertical",
      spaceBetween: 0,
      autoplay : true,
      loop: true,
      pagination: {
        el: "#agreePopup .swiper-pagination",
        clickable: true,
      },
       
      });

      const swiper4 = new Swiper("#refurbish.mySwiper", {
        slidesPerView: 2,
        slidesPerGroup:2,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: {
            slidesPerView:2,  //브라우저가 768보다 클 때
            spaceBetween: 0,
          },
          375: {
            slidesPerView:2,  //브라우저가 768보다 클 때
            spaceBetween: 0,
          },
          425: {
            slidesPerView: 2,  //브라우저가 768보다 클 때
            spaceBetween: 0,
          }, 
          580: {
            slidesPerView: 2,  //브라우저가 768보다 클 때
            spaceBetween: 0,
          },   
          768: {
            slidesPerView: 2,  //브라우저가 768보다 클 때
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2,  //브라우저가 1024보다 클 때
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 2,  //브라우저가 1024보다 클 때
            spaceBetween: 0,
          },
        }
    });

    // const swiper5 = new Swiper("#newProduct.mySwiper", {
    //   slidesPerView: 8,
    //   slidesPerGroup:8,
    //   loop: true,
    //   scrollbar: {
    //     el: "#newProduct .swiper-scrollbar",
    //     hide: false,
    //   },
    // });
    
