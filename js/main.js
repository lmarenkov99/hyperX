$(function () {


  $('.menu-btn').on('click', function () {
    $('.header__menu-list').slideToggle();
  });

  $('.matchup__items').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 6000,
        settings: "unslick"
      },
      {
        breakpoint: 1051,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });
  $('.gifts__inner').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 6000,
        settings: "unslick"
      },
      {
        breakpoint: 1051,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });
  $('.choose-team__inner').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 6000,
        settings: "unslick"
      },
      {
        breakpoint: 1051,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  // start change
  $("#anchor, #menu, #conditionsAnchor, #modal__anchor").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });
  // end change
  $('.characteristics__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.characteristics__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.characteristics__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

  $('.buy__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.buy__tabs').find('.tab-item-o').removeClass('active-tab').hide();
    $('.buy__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });
// start rating
  $('.rating__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.rating__tabs').find('.tab-item-o').removeClass('active-tab').hide();
    $('.rating__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });
// end rating
  $('.sample_goal').goalProgress({
    goalAmount: 40000,
    currentAmount: 35000,
    textAfter: '/40000 очков &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
  });

  $('.sample_goal-second').goalProgress({
    goalAmount: 40000,
    currentAmount: 28000,
    textBefore: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
    textAfter: '/40000 очков'
  });
  $('.vote-btn').on('click', () => {

    $('.vote-off').hide();
    $('.vote-on').show();
    $('.vote-btn').attr("disabled");

    $('.vote-btn.on').hide();
    $('.vote-btn.off').show();
    $('.vote-btn').attr("disabled");

  });
});