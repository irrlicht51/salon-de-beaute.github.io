var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 2000,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(function () {
  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body, html").animate(
      {
        scrollTop: position,
      },
      500,
      "swing"
    );
    return false;
  });

  var pageTop = $("#page-top");
  var win = $(window);
  pageTop.hide();
  win.scroll(function () {
    var scroll = win.scrollTop();
    var winHeight = win.height();
    if (scroll > 100) {
      pageTop.fadeIn(500);
    } else {
      pageTop.fadeOut(500);
    }

    if (scroll > winHeight / 3) {
      $("header").addClass("is-fixed");
    } else {
      $("header").removeClass("is-fixed");
    }
  });

  $(".burger-btn").on("click", function () {
    $(this).toggleClass("clicked");
    $(".header-navi").toggleClass("clicked");
    $("body").toggleClass("noscroll");
  });

  if (window.matchMedia("(max-width: 768px)").matches) {
    $(".header-navi ul li > a").on("click", function () {
      $(".header-navi").removeClass("clicked");
      $(".burger-btn").removeClass("clicked");
      $("body").removeClass("noscroll");
    });
  }
});
