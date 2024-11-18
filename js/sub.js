// 상단 배너 슬라이드
var swiper = new Swiper(".bn_slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
});

// 하이라이트
// IntersectionObserver 를 등록한다.
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // 관찰 대상이 viewport 안에 들어온 경우 'on' 클래스를 추가
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('on');
    }
    // 그 외의 경우 'on' 클래스 제거
    else {
      entry.target.classList.remove('on');
    }
  });
});

// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
const boxElList = document.querySelectorAll('.highlight');
boxElList.forEach((el) => {
  io.observe(el);
});


// IntersectionObserver 를 등록한다.
const io2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // 관찰 대상이 viewport 안에 들어온 경우 'on2' 클래스를 추가
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('on2');
    }
    // 그 외의 경우 'on2' 클래스 제거
    else {
      entry.target.classList.remove('on2');
    }
  });
});

const boxElList2 = document.querySelectorAll('.highlight2');
boxElList2.forEach((el) => {
  io2.observe(el);
});



// 구독창 select

$(window).on('load', function () {
  selectCus();
})

function selectCus() {
  $('.select_cus').each(function () {
    const $select = $(this);
    const $selectTrigger = $select.find('.trigger');
    const $options = $select.find('.option');
    const $hiddenInput = $select.find('.opt_val');

    //select option 열기
    $selectTrigger.click(function () {
      $options.toggle();
      $select.toggleClass('active');
      $('.select_cus').not($select).find('.option').hide();
      $('.select_cus').not($select).removeClass('active');
    });

    //option 선택
    $options.find('li').click(function () {
      const value = $(this).data('value');
      const text = $(this).text();
      $select.find('.trigger_txt').text(text);
      $options.hide();
      $select.removeClass('active');
      //옵션 선택했을 때 클래스 추가
      if (value != '') {
        $select.addClass('select')
      } else {
        $select.removeClass('select')
      }
      // hidden 필드에 선택한 값을 설정
      $hiddenInput.val(value);
    });
  });

  //select 영역 외 다른곳을 누르면 select 닫힘
  $(document).click(function (e) {
    if (!$(e.target).closest('.select_cus').length) {
      $('.select_cus .option').hide();
      $('.select_cus').removeClass('active');
    }
  });
}

// 다섯번째 슬라이드
$(function(){
  $('.box5slide li').click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
  });
  $('.prev').click(function(){
    $('.left').toggleClass('box_active').siblings().removeClass('box_active');
  });
  $('.next').click(function(){
    $('.right').toggleClass('box_active').siblings().removeClass('box_active');
  });
});

// 광고 배너 슬라이드
var swiper = new Swiper(".bottom", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    loop: true,
  },

});
// 메세지 보내기
AOS.init({
  duration: 1500,//aos 나타나는 속도
  autoplay: {
  loop: true, 
},
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