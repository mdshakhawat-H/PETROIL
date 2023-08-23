// ========= BANNER SLIDER START =======
$('.banner_slider').slick({
    prevArrow: '<i class="fa-solid fa-arrow-left slick_left"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right slick_right"></i>',
    autoplay: false,
    autoplaySpeed: 2000,
});
// ========= BANNER SLIDER END =======


// ========= IMGSLID START ========
$('.main_imgslid').slick({
    slidesToShow: 4,
    arrows: false ,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: '20px',
});
// ========= IMGSLID END ========