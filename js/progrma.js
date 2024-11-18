
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





const $carousel_cells = $('#product-carousel li');
const $carousel_dots = $('#carousel-dots li');
const $carousel_nav = $('.carousel-nav');
let selected_product_index = 0;

function selectProduct(index) {
  selected_product_index = index % $carousel_cells.length;

  if (selected_product_index < 0) selected_product_index = $carousel_cells.length + selected_product_index;

  $carousel_cells.each(function (i) {
    let offset = i - selected_product_index;
    if (offset < 0) offset += $carousel_cells.length;

    let index;
    for (index = 0; index < $carousel_cells.length + 1; index++) {
      $(this).removeClass('item-' + index).addClass('item-' + (offset + 1));
    }
  });

  $carousel_dots.eq(index).addClass('active').siblings('li').removeClass('active');
}

/* Arrow clicks */
$carousel_nav.click(function () {
  const delta = $(this).hasClass('prev') ? -1 : 1;
  const $delta_product = $(`#product-carousel li:eq(${(selected_product_index + delta) % $carousel_cells.length})`);
  const delta_product_index = parseInt($delta_product.index());
  selectProduct(delta_product_index);
});

/* Can clicks */
$carousel_cells.click(function () {
  selectProduct($(this).index());
});

/* Pagination */
$carousel_dots.click(function (e) {
  selectProduct($(this).index());
  $(e.currentTarget).addClass('active').siblings('li').removeClass('active');
});

/* Left/Right key arrows */
$(document).keydown(e => {
  const delta = e.keyCode == 37 ? -1 : 1;
  const $delta_product = $(`#product-carousel li:eq(${(selected_product_index + delta) % $carousel_cells.length})`);
  const delta_product_index = parseInt($delta_product.index());

  if (e.keyCode == 37 || e.keyCode == 39) {
    selectProduct(delta_product_index);
    return false;
  }
});

/*
    Inspired by:
    https://www.7up.com/en/products
    */