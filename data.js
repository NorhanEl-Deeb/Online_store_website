/*########################### This code is written by Norhan El-Deeb @2019 #########################*/

/* To open bar */
$('.open-menu-icon').on('click', function(){
    $('.main-nav-outer').addClass('open-menu');
});

/*To close bar*/
$('.menu-close-icon').click(function(){
    $('.main-nav-outer').removeClass('open-menu');
});

