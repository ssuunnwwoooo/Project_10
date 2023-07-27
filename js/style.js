$(function () {


    $('.main_Visual').fullpage({
        css3: false,
        navigation: true,
        scrollOverflow: true,
        afterRender: function () {
            $('.main_Visual .section').eq(0).addClass('on')
        },

        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            $('.main_Visual .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
        },
    })

    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.header').toggleClass('on');
    });

})