var swiper = new swiper(".content",{
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: "true",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
    autoplay: {
      delay: 1000,
    },
    // Infinite Loop Added
    loop: true,
  });

// Mobile Navigation
var mobileNav = function () {
  var mobile = window.matchMedia("(max-width: 991px)");
  var wrapMenu = $("#site-header-inner .wrap-inner");
  var navExtw = $(".nav-extend.active");
  var navExt = $(".nav-extend.active").children();

  responsivemenu(mobile);

  mobile.addListener(responsivemenu);

  function responsivemenu(mobile) {
    if (mobile.matches) {
      $("#main-nav")
        .attr("id", "main-nav-mobi")
        .appendTo("#header_main")
        .hide()
        .children(".menu")
        .append(navExt)
        .find("li:has(ul)")
        .children("ul")
        .removeAttr("style")
        .hide()
        .before('<span class="arrow"></span>');
    } else {
      $("#main-nav-mobi")
        .attr("id", "main-nav")
        .removeAttr("style")
        .prependTo(wrapMenu)
        .find(".ext")
        .appendTo(navExtw)
        .parent()
        .siblings("#main-nav")
        .find(".sub-menu")
        .removeAttr("style")
        .prev()
        .remove();

      $(".mobile-button").removeClass("active");
      $(".mobile-button-style2").removeClass("active");
      $(".sub-menu").css({ display: "block" });
    }
  }
  $(document).on("click", ".mobile-button", function () {
    $(this).toggleClass("active");
    $("#main-nav-mobi").slideToggle();
  });
  $(document).on("click", ".mobile-button-style2", function () {
    $(this).toggleClass("active");
    $("#main-nav-mobi").slideToggle();
  });
  $(document).on("click", "#main-nav-mobi .arrow", function () {
    $(this).toggleClass("active").next().slideToggle();
  });
};