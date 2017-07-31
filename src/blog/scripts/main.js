
var launchTile = function(e){
    $('.flip-container').toggleClass('hide');
    $('#' + this.id).toggleClass('current');
}

$(document).ready(function(){
    $("#burger-nav").on('click',function(){
        $('header nav ul').toggleClass('open');
    });
    $('.flip-container').on('click',launchTile);
})

