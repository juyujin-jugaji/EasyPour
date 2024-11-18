// 타이틀 슬라이드
var swiper = new Swiper('.title ', {
  direction: "vertical",//세로 방향
  speed: 1000,//버튼을 눌렀을 때 슬라이드가 넘어가는 시간
  mousewheel: true,
  watchOverflow: true,
  on: {
    slideChange: function () {
      setTimeout(function () {
        swiper.params.touchReleaseOnEdges = false;
        swiper.params.mousewheel.releaseOnEdges = false;
      });
    },
    reachEnd: function () {
      setTimeout(function () {
        swiper.params.touchReleaseOnEdges = true;
        swiper.params.mousewheel.releaseOnEdges = true;
      }, 500);
    },
    reachBeginning: function () {
      setTimeout(function () {
        swiper.params.touchReleaseOnEdges = true;
        swiper.params.mousewheel.releaseOnEdges = true;
      }, 500);
    }
  }
});


// aos
AOS.init({
  duration: 1500 //aos 나타나는 속도
});


// 지도
$(function () {

  $("#togglemap").click(function () {

    $("iframe").toggle();

  });
});

// 이벤트 슬라이드
var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".mySwiper .swiper-pagination",
    dynamicBullets: true,
  },

  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

});


// 헤더
$(function () {
  //숨긴 메뉴 보이기 
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.header_scroll').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta 
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up. 
    // This is necessary so you never see what is "behind" the navbar. 
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down 
      $('.header_scroll').addClass('nav-up');
    } else {
      // Scroll Up 
      if (st + $(window).height() < $(document).height()) {
        $('.header_scroll').removeClass('nav-up');
      }
    }

    lastScrollTop = st;
  }
});

// 햄버거 버튼 클릭 이벤트 
var burger = $('.menu-trigger');

burger.each(function (index) {
  var $this = $(this);

  $this.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active-' + (index + 1));
  })
});

var h = 0;

$(burger).on("click", function () {
  if (h == 0) {
    $('.ham-con').animate({
      right: '0',
      opacity: 1,
    }, 500);
    $(this).addClass('active-1');
    h++;
  } else if (h == 1) {
    $('.ham-con').animate({
      right: '-100%',
      opacity: 0,
    }, 500);
    $(this).removeClass('active-1');
    h--;
  }

})

// 패키지 전개도 토글
$(function () {

  $(".a1").click(function () {

    $(".img1").toggle();
   
  });
 
  $(".a2").click(function () {

    $(".img2").toggle();

  });
  $(".a3").click(function () {

    $(".img3").toggle();

  });
  $(".a4").click(function () {

    $(".img4").toggle();

  });
});