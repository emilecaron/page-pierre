/*
    Article photo columns 
*/

var displayCorrectPicture = function(e) {
    var article = $(e.currentTarget);

    // Big maths to compute new image to select
    var image = Math.floor(e.offsetX * article.attr('splits') / article.width());
    
    // If correct image is already active return and do nothing
    if (image.toString() === article.attr('active-img')) return;
    
    // Save new active image
    article.attr('active-img', image);

    // Remove active class from all pictures except the selected
    /*
    article.children('.photo-column.active').removeClass('active');
    activeImage = article.children('.photo-column').get(image);
    $(activeImage).addClass('active');
    */

    activeImage = article.children('.photo-column').get(image);
    var previousActive = article.children('.photo-column.active');
    previousActive.removeClass('active');
    previousActive.fadeOut('slow');

    $(activeImage).addClass('active');
    $(activeImage).fadeIn('slow');
};

var displayAllFirstImages = function() {

    // Display default photo for each article
    $('.article .photo-column:first-child').addClass('active').fadeIn('slow');
    $('.article').attr('active-img', 0);
    
};

var toggleArticleSize = function(e){

    var article = $(e.currentTarget);

    // Maximize and minimize ratios
    var ratio = (article.hasClass('maximized'))? 0.5: 2;

    // Prepare transformation parameters
    var properties = {
        width: article.width() * ratio,
        height: article.height() * ratio
    };
    var options = {duration: 200};

    // Reduce all other maximized articles
    // SOON

    // Apply transformation to article and images
    article.animate(properties, options).toggleClass('maximized');
    article.children('img').each(function(_, img) {$(img).animate(properties, options);});

};

$(function(){
    console.log('article.js loaded');

    // Bind photo display to hover events
    $('.article').mousemove(displayCorrectPicture);

    $('.article').click(toggleArticleSize);
});
