
// 타이틀 슬라이드
var swiper = new Swiper('.title ', {
  direction: "vertical",//세로 방향
  speed: 1000,//버튼을 눌렀을 때 슬라이드가 넘어가는 시간
  mousewheel: true,
  watchOverflow : true,
  on: {
    reachEnd: function () {
      swiper.mousewheel.disable();
    }
  }
});
window.addEventListener('wheel', function (event) {
  if (event.deltaY < 0) {
    swiper.mousewheel.enable();
  } else if (event.deltaY > 0) {}
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
      opacity: 1
    }, 500);
    $(this).addClass('active-1');
    h++;
  } else if (h == 1) {
    $('.ham-con').animate({
      right: '-10%',
      opacity: 0
    }, 500);
    $(this).removeClass('active-1');
    h--;
  }
  
})




// 스토리 슬라이드
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".story", {
  spaceBetween: 70,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
 
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});


// 탭
function openTab(evt, tab) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("content__inner");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tab");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tab).style.display = "block";
	evt.currentTarget.className += " active";
}

// 탭내용(로스팅 슬라이드)
var swiper2 = new Swiper(".roast-swipe", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
