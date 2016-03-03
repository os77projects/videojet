jQuery(document).ready(function ($) {
    //Main Menu
    var menus = function () {
        var windW = $(window).width();
        if (windW <= 767) {
            $('.tablet-menu-toggle').click(function () {
                $('.header-menu').fadeToggle(200);
            });
            $('.navbar-toggle').click(function () {
                $(this).one().toggleClass('active');
                $('.header-bottom').fadeToggle(200);
                $('.manage-account').fadeToggle(200);
            });
            $('#header .has_sub-menu > a').click(function (e) {
                e.preventDefault();
                $(this).parent().toggleClass('opened');
                $(this).parent().find('> ul').slideToggle(200);
            });
        }
    };

    menus();

    //Sidebar Menu
    $('.sidebar .has_sub-menu > a').click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('opened');
        $(this).parent().find('> ul').slideToggle(200);
    });

    var windW = $(window).width();

    var mainContentH = $('#main').outerHeight();
    var headerH = $('#header').outerHeight();
    var footerH = $('#footer').outerHeight();

    if(windW >= 768) {
        $('.content_full-height').css('min-height', mainContentH-(headerH+footerH));
    } else {
        $('.content_full-height').removeAttr('style');
    }

    //Select
    $('select').select2({
        minimumResultsForSearch: -1,
        containerCssClass: 'first-select',
        adaptDropdownCssClass: function (c) {
            if (c.indexOf("s2-dropdown") === 0)
                return c;
        }
    });

    $(window).resize(function() {
        var windW = $(window).width();

        var mainContentH = $('#main').outerHeight();
        var headerH = $('#header').outerHeight();
        var footerH = $('#footer').outerHeight();

        if(windW >= 768) {
            $('.content_full-height').css('min-height', mainContentH-(headerH+footerH));
        } else {
            $('.content_full-height').removeAttr('style');
        }
        
        if(windW >= 768) {
            $('.header-menu').removeAttr('style');
            $('.header-bottom').removeAttr('style');
            $('.manage-account').removeAttr('style');
            $('#header .has_sub-menu > ul').removeAttr('style');
            $('.navbar-toggle').removeClass('active');
            $('#header .has_sub-menu').removeClass('opened');
        }
    });
});