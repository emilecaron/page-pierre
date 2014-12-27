/*
    Header Size
*/

adjustHeaderSize = function(e){

    // Compute logo size
    var _size = 100 - $('body').scrollTop()/2;
    var logoSize = Math.max(_size, 40);

    // Compute new widths
    var leftWidth = (e && e.type === 'mousemove')? e.screenX - (logoSize / 2): $('#header-left').width();
    leftWidth = Math.max(0, Math.min(leftWidth, $(window).width() - logoSize))
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
    $('#header').mousemove(adjustHeaderSize);

    // Slide down the header
    $('#header').slideDown('slow', displayAllFirstImages);
});
