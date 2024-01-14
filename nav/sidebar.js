const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed-nav");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

const searchInput = document.querySelector(".search__wrapper #nav-search-bar");
searchInput.addEventListener("focus", (e) => {
  document.body.classList.remove("collapsed-nav");
});

const submenu = document.querySelector("#accounts-menu");
submenu.addEventListener("click", (e) => {
  document.body.classList.remove("collapsed-nav");
});

jQuery(document).ready(function($) {
  var x = $(this).width();
  var y = $(this).height();
  if (x > 1100 || x < 850) {
    document.body.classList.remove("collapsed-nav");
  } else {
    document.body.classList.add("collapsed-nav");
  }

  $('#accounts-menu').click(function() {
    $('#account-submenu').toggle('slow');
  });

  $(document).on('click', '.mobile-menu-icon', function() {
    $('.menu-open').toggle()
    $('.menu-close').toggle()
    if ($('.menu-wrapper').css('visibility') == 'hidden') {
      $('.menu-wrapper').css('visibility', 'visible')
    } else {
      $('.menu-wrapper').css('visibility', 'hidden')
    }
    if ($('#notification-display').css('visibility') == 'hidden') {
      $('#notification-display').css('visibility', 'visible')
    } else {
      $('#notification-display').css('visibility', 'hidden')
    }
  });

  $(window).on('resize', function(e) {
    var x = $(this).width();
    var y = $(this).height();
    if (x > 1100 || x < 850) {
      document.body.classList.remove("collapsed-nav");
    } else {
      document.body.classList.add("collapsed-nav");
    }
    if (x > 850) {
      $('.menu-wrapper').css('visibility', 'visible')
      $('#notification-display').css('visibility', 'visible')
    } else {
      $('.menu-wrapper').css('visibility', 'hidden')
      $('#notification-display').css('visibility', 'visible')
    }
  })
})