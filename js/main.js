$(document).ready(function() {
    var daysOfWeek = ["sun", "mon", "tues", "wednes", "thurs", "fri", "satur"];
    var monthsOfYear = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    var today = new Date();
    var dayOfWeek = today.getDay();
    var month = today.getMonth();
    var day = today.getDate();
    var year = today.getFullYear();
    $("#dayOfWeek").text(daysOfWeek[dayOfWeek]);
    $("#month").text(monthsOfYear[month]);
    $("#day").text(day);
    $("#year").text(year);
});

$(function () {
  $(".hero-slider")
    .on("init", function (event, slick) {
      $(this).append(
        '<div class="slick-num"><span class="now-count"></span>|<span class="all-count"></span></div>'
      );
      $(".now-count").text(slick.currentSlide + 1);
      $(".all-count").text(slick.slideCount);
    })
    .slick({
      autoplay: true,
      autoplaySpeed: 1500,
      fade: true,
      speed: 1500,
      prevArrow: '<div class="slick-prev"></div>',
      nextArrow: '<div class="slick-next"></div>'
    })
    .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      $(".now-count").text(nextSlide + 1);
    });
});
  
$(document).on('click', 'a[href*="#"]', function () {
  let time = 200;
  let header = $('header').innerHeight();
  let target = $(this.hash);
  if (!target.length) return;
  let targetY = target.offset().top - header;
  $('html,body').animate({ scrollTop: targetY }, time, 'swing');
  return false;
});

//スクロール menubar logo変更

$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".hero").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-menubar").addClass("menubarLogoScroll");
    } else {
      $(".js-menubar").removeClass("menubarLogoScroll");
    }
  });
});

//スクロール menubar color変更

$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".hero").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-menubar").addClass("menubarColorScroll");
    } else {
      $(".js-menubar").removeClass("menubarColorScroll");
    }
  });
});

//fixed top用

$(function() {
  var nav = $('.menubar');
  //navの位置    
  var navTop = nav.offset().top;
  //スクロールするたびに実行
  $(window).scroll(function () {
      var winTop = $(this).scrollTop();
      //スクロール位置がnavの位置より下だったらクラスfixedを追加
      if (winTop >= navTop) {
          nav.addClass('fixed')
      } else if (winTop <= navTop) {
          nav.removeClass('fixed')
      }
  });
});

//fixed article,info用

$(function() {
  var nav = $('.page-menubar');
  //navの位置    
  var navTop = nav.offset().top;
  //スクロールするたびに実行
  $(window).scroll(function () {
      var winTop = $(this).scrollTop();
      //スクロール位置がnavの位置より下だったらクラスfixedを追加
      if (winTop >= navTop) {
          nav.addClass('fixed')
      } else if (winTop <= navTop) {
          nav.removeClass('fixed')
      }
  });
});

//ローディング画面

$(function () {
  $(window).on("load", function () {
    setTimeout(() => {
      //1000msかけてフェードアウトする、この場合はローディング背景、文字ごとフェードアウトさせる
      $('.loading').fadeOut(1000);
      //2000ms後に上記のフェードアウトを実行する
    }, 2000);

    setTimeout(() => {
      //1000msかけて今回は文字をフェードインする
      $('.loading__fade').fadeIn(1000);
      //300ms後に上記のフェードインをを実行する
    }, 300);
  });
});

$(function () {
  $(window).on("load", function () {
    setTimeout(() => {
      //1000msかけてフェードアウトする、この場合はローディング背景、文字ごとフェードアウトさせる
      $('.loading-slow').fadeOut(2000);
      //2000ms後に上記のフェードアウトを実行する
    }, 4000);

    setTimeout(() => {
      //1000msかけて今回は文字をフェードインする
      $('.loading-slow__fade').fadeIn(2000);
      //300ms後に上記のフェードインをを実行する
    }, 600);
  });
});