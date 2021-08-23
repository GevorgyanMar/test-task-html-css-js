$(document).ready(function() {
    var time = 0;
    $('.open-menu').on('click', function() {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {}
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({ 'width': '100%', transition: '0.3s' })
            $('body').addClass('body_fix');
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function() {
                time++;
                $(this).css({ 'transition-delay': '0.' + time + 's' });
                $(this).addClass('anim-menu');
                $('.menu-cnt').addClass('transition-menu');
            })
        } else {
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu')
            time = 0;
            var menu_lis = $(".sidenav ul li");
            $(menu_lis).each(function() {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({ 'opacity': '1', transition: '0.2s' })
                }
            })
        }

    });
    $('.for-mobile-bg').on('click', function() {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').css({ width: '0%!important' });
        $('body').removeClass('body_fix');
        time = 0;
        var menu_li = $(".sidenav ul li");
        $(menu_li).each(function() {
            if ($(this).hasClass('anim-menu')) {
                $(this).removeClass('anim-menu');
                $(this).css({ 'opacity': '0', transition: '0.2s' })
            }
        })
    })
});




///////////////////////