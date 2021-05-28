$(function() {
    
    $( "#asia" ).click(function() {
        $('article').empty();
        $('main').removeClass();
        $('main').addClass('parallax1');
        $('article').append('<div class="nude1"></div>');
    });
    
    $( "#barna" ).click(function() {
        $('article').empty();
        $('main').removeClass();
        $('main').addClass('parallax2');
        $('article').append('<div class="nude2"></div>');
    });
    
    $( "#voros" ).click(function() {
        $('article').empty();
        $('main').removeClass();
        $('main').addClass('parallax3');
        $('article').append('<div class="nude3"></div>');
    });
    
});