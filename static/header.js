/*
    Header elements width
*/

adjustWidth = function(){
    console.log('hello');

    $('.header-left').width(100);
    $('.header-right').width( $(window).width() - 200);
};


$(function(){
    console.log('header.js loaded');
    
    // Bind functions to resize/scroll events
    $(window).resize(adjustWidth);
    $(window).scroll(adjustWidth);
});