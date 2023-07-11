var swiper = new Swiper(".myscrubsCollection", {
    freeMode: true,
    breakpoints: {

      0: {
          slidesPerView: 1, //화면에 보이는 이미지 갯수
          spaceBetween: 30, //이미지사이의 여백
      },
      768: {
          slidesPerView: 2, //화면에 보이는 이미지 갯수
          spaceBetween: 30, //이미지사이의 여백
      },
      900: {
          slidesPerView: 2.5, //화면에 보이는 이미지 갯수
          spaceBetween: 30, //이미지사이의 여백
      },
      1025: {
          slidesPerView: 3, //화면에 보이는 이미지 갯수
          spaceBetween: 30, //이미지사이의 여백
      },
      1210: {
          slidesPerView: 3.5,
          spaceBetween: 30,
      },
      1400: {
          slidesPerView: 4,
          spaceBetween: 30,
      },
      1580: {
          slidesPerView: 4.5,
          spaceBetween: 30,
      },
    },
  });