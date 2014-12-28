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


    var activeImage = article.children('.photo-column').get(image);
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
    /*
     *  Toggle article to maximized size
     *  Makes it twice bigger/smaller using an animation
     */

    var article = $(e.currentTarget);

    // Maximize and minimize ratios
    var ratio = (article.hasClass('maximized'))? 0.5: 2;

    // Prepare transformation parameters
    var properties = {
        width: article.width() * ratio,
        height: article.height() * ratio
    };
    var options = {duration: 200};

    // Reduce all other maximized articles to only have one
    if (!article.hasClass('maximized'))
        $('.maximized').trigger($.Event('click'));

    // Apply transformation to article and images
    article.animate(properties, options).toggleClass('maximized');
    article.children('img').each(function(_, img) {$(img).animate(properties, options);});

};

var setArticleSize = function(ratio){
    /*
     *  Resize all articles/images using the given ratio
     *  newWidth = window.articleWidth0 * ratio
     */
    console.log('resizing ' + ratio);

    $('.article').width(window.articleWidth0 * ratio);
    $('.article img').width(window.articleWidth0 * ratio);
    $('.article').height(window.articleHeight0 * ratio);
    $('.article img').height(window.articleHeight0 * ratio);
    
};

$(function(){
    console.log('article.js loaded');
    
    // Save initial article size
    window.articleWidth0 = $('.article').first().width()
    window.articleHeight0 = $('.article').first().height()

    // Bind photo display to hover events
    $('.article').mousemove(displayCorrectPicture);

    // Bind article click to toggle resize
    $('.article').click(toggleArticleSize);
});
