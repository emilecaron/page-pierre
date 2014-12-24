/*
    Header Size
*/

adjustHeaderSize = function(){
    console.log('hello');

    // Compute logo size
    var _size = 100 - $('body').scrollTop()/2;
    var logoSize = (_size > 40)? _size: 40;
    console.log(logoSize);

    // Compute new widths
    var leftWidth = 100;
    var rightWidth = $(window).width() - leftWidth - logoSize;

    // Apply width to elements
    $('#header-left').width(leftWidth);
    $('#header-logo').width(logoSize);
    $('#header-right').width(rightWidth);

    // Apply height to logo and header
    $('#header').height(logoSize);
    $('#header-logo').height(logoSize);
};


$(function(){
    console.log('header.js loaded');

    // Set initial header size
    adjustHeaderSize();
    
    // Bind functions to resize/scroll events
    $(window).resize(adjustHeaderSize);
    $(window).scroll(adjustHeaderSize);
});