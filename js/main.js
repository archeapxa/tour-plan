$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },

    // fade effect
    // effect: "fade",
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },

    // fade effect
    // effect: "fade",
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');

  function openModal(e) {
    e.preventDefault();
    var targetModal = $(this).attr('data-href');
    $(targetModal).find(".modal__overlay").addClass('modal__overlay--visible');
    $(targetModal).find(".modal__dialog").addClass('modal__dialog--visible');
  }
  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');

  function closeModal(e) {
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  $(document).on('keydown', function (e) {
    if (e.keyCode === 27) {
      closeModal();
    }
  });

});