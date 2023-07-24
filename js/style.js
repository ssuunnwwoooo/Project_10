$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $('.main_Visual').fullpage({
        navigation: false,
        css3: false,
        scrollOverflow: true,
        afterRender: function () {
            $('.main_Visual .section').eq(0).addClass('on')
        },
    })
})