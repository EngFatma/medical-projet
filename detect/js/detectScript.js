     //#######  Start man body script  ##########

//map area hover event
$('area').hover(function (event) {

    var selector = $(this).attr('data-id');

    var bodyPartImgSrc = $('#' + selector).attr('src');

    var avatar = $('#s-avatar');

    switch (event.type) {
            
        case 'mouseenter':
            avatar.attr('src', bodyPartImgSrc);
            $('[data-bodypart="' + selector + '"]').addClass('hover');
            break;

        case 'mouseleave':
            avatar.attr('src', avatar.attr('data-originalImg'));

            $('[data-bodypart].hover').removeClass('hover');
            break;
    }
});



//when we hover on any li this will show this part of body
$(document).on('mouseenter mouseleave', '#bodyparts li', function (e) {
    var selector = $(this).data('bodypart');
    var bodyPartImgSrc = $('#' + selector).attr('src');
    var avatar = $('#s-avatar');
    switch (e.type) {
        case 'mouseenter':
            avatar.attr('src', bodyPartImgSrc);
            break;
        case 'mouseleave':
            avatar.attr('src', avatar.attr('data-originalImg'));
            break;
    }


});


//when we click on any part of avatar this function display list of amrad
$('area').click(function (e) {

    e.preventDefault();

    var selector = $(this).attr('data-id');

    var content = $('[data-bodypart="' + selector + '"]').children('a').text();

    var ul_id = $('[data-bodypart="' + selector + '"]').children('ul').html();

    // filling header with name of marad
    $('#bodyPartHeader').html(content);

    // filling ul with list of a3rad
    $('#symUl').html(ul_id);


});


//when we click on any part of list of body parts  this function display list of amrad

$('#bodyparts li').click(function(e){
    e.preventDefault();
    
    var content = $(this).children('a').text();
    
    $('#bodyPartHeader').html(content);
    
    
    var ul_id =$(this).children('ul').html();
    
        $('#symUl').html(ul_id);

    
});

     //#######  End man body script  ##########







     //####### Start women body script  ##########



//map area hover event
$('area').hover(function (event) {

    var selector = $(this).attr('data-id');

    var bodyPartImgSrc = $('#' + selector).attr('src');

    var avatar = $('#w-avatar');

    switch (event.type) {

        case 'mouseenter':

            avatar.attr('src', bodyPartImgSrc);

            $('[data-bodypart="' + selector + '"]').addClass('hover');
            break;

        case 'mouseleave':
            avatar.attr('src', avatar.attr('data-originalImg'));

            $('[data-bodypart].hover').removeClass('hover');
            break;

    } ;
});

//when we hover on any li this will show this part of body
$(document).on('mouseenter mouseleave', '#w_bodyparts li', function (e) {
    var selector = $(this).data('bodypart');
    var bodyPartImgSrc = $('#' + selector).attr('src');
    var avatar = $('#w-avatar');
    switch (e.type) {
        case 'mouseenter':
            avatar.attr('src', bodyPartImgSrc);
            break;
        case 'mouseleave':
            avatar.attr('src', avatar.attr('data-originalImg'));
            break;
    }


});



//when we click on any part of avatar this function display list of amrad
$('area').click(function (e) {

    e.preventDefault();

    var selector = $(this).attr('data-id');

    var content = $('[data-bodypart="' + selector + '"]').children('a').text();

    var ul_id = $('[data-bodypart="' + selector + '"]').children('ul').html();

    // filling header with name of marad
    $('#w_bodyPartHeader').html(content);

    // filling ul with list of a3rad
    $('#w_symUl').html(ul_id);


});


//when we click on any part of list of body parts  this function display list of amrad

$('#w_bodyparts li').click(function(e){
    e.preventDefault();
    
    var content = $(this).children('a').text();
    
    $('#w_bodyPartHeader').html(content);
    
    
    var ul_id =$(this).children('ul').html();
    
        $('#w_symUl').html(ul_id);

    
    
});



     //#######  End women body script  ##########




  //####### Start child body script  ##########

//map area hover event
$('area').hover(function (event) {

    var selector = $(this).attr('data-id');

    var bodyPartImgSrc = $('#' + selector).attr('src');

    var avatar = $('#c-avatar');

    switch (event.type) {

        case 'mouseenter':

            avatar.attr('src', bodyPartImgSrc);

            $('[data-bodypart="' + selector + '"]').addClass('hover');
            break;

        case 'mouseleave':
            avatar.attr('src', avatar.attr('data-originalImg'));

            $('[data-bodypart].hover').removeClass('hover');
            break;

    } ;
});

//when we hover on any li this will show this part of body
$(document).on('mouseenter mouseleave', '#c_bodyparts li', function (e) {
    var selector = $(this).data('bodypart');
    var bodyPartImgSrc = $('#' + selector).attr('src');
    var avatar = $('#c-avatar');
    switch (e.type) {
        case 'mouseenter':
            avatar.attr('src', bodyPartImgSrc);
            break;
        case 'mouseleave':
            avatar.attr('src', avatar.attr('data-originalImg'));
            break;
    }


});



//when we click on any part of avatar this function display list of amrad
$('area').click(function (e) {

    e.preventDefault();

    var selector = $(this).attr('data-id');

    var content = $('[data-bodypart="' + selector + '"]').children('a').text();

    var ul_id = $('[data-bodypart="' + selector + '"]').children('ul').html();

    // filling header with name of marad
    $('#c_bodyPartHeader').html(content);

    // filling ul with list of a3rad
    $('#c_symUl').html(ul_id);


});


//when we click on any part of list of body parts  this function display list of amrad

$('#c_bodyparts li').click(function(e){
    e.preventDefault();
    
    var content = $(this).children('a').text();
    
    $('#c_bodyPartHeader').html(content);
    
    
    var ul_id =$(this).children('ul').html();
    
        $('#c_symUl').html(ul_id);

    
    
});





  //#######  End child body script  ##########


