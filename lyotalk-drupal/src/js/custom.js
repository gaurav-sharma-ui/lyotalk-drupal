console.log('hello all')
console.log(jQuery);
// $('.slick').slick({
//   infinite: true,
//   arrows: false,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });

// $('.testimonials').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear',
//   prevArrow: $('.prev'),
//   nextArrow: $('.next')
// })

// $('.ourPartners__images').slick({
//   infinite: true,
//   arrows: false,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1
//       }
//     }
//   ]
// })

// $('.ourEvents__slick').slick({
//   infinite: true,
//   arrows: false,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     }
//   ]
// })

// $('.values-slider').slick({
//   infinite: true,
//   arrows: false,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });


$(document).ready(function () {
  var lastScrollTop = 0;
  $(window).scroll(function () {
    var st = $(this).scrollTop();
    var header = $('header');
    if (st > lastScrollTop) {
      // Scroll down: Hide header and change background to white
      header.css('top', '-100px').addClass('white-bg');
    } else {
      // Scroll up: Show header and keep background white
      header.css('top', '0px');
    }

    // If at the top of the page, make header transparent
    if ($(window).scrollTop() === 0) {
      header.removeClass('white-bg');
    }

    lastScrollTop = st;
  });

  // or assign settings
  $('.stickit').stickit({
    top: 120
  });
});


// $(function () {
// var urlLink = location.pathname.split('/');
// var current = urlLink[urlLink.length - 1];
// $('.navbar-nav li a').each(function () {
//   var $this = $(this);
//   if ($this.attr('href') === current) {
//     $('.navbar-nav li a').removeClass('active');
//     $this.addClass('active');
//   }
// })
// })