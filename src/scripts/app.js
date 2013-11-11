jQuery(function () {
    $('#menuToggle').click(function () {
        console.log('hello');

        var menu = $('#menu');
        if(menu.hasClass('show')){
            menu.removeClass('show');
            menu.addClass('hide');
        }   else {
            menu.removeClass('hide');
            menu.addClass('show');
        }

    });


});

