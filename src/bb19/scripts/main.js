var setCount = function(e){
    $('.count.vote1').text($('.flipper.vote1').length);
    $('.count.vote2').text($('.flipper.vote2').length);
    $('.count.vote3').text($('.flipper.vote3').length);
}

var changeColor = function (e) {
    var classes = ['vote1', 'vote2'];
    if ($(e.target.parentElement).hasClass('nom')){
        alert('Nominees cannot vote!');
        return;
    }
    if ($(e.target.parentElement).hasClass('hoh')){
        alert('HOH cannot vote except in a tie!');
        return;
    }
    if ($(e.target).hasClass('vote1')){
        $(e.target).removeClass('vote1');
        $(e.target).addClass('vote2');
        setCount();
        return;
    }
    if ($(e.target).hasClass('vote2')){
        $(e.target).removeClass('vote2');
        $(e.target).addClass('vote3');
        setCount();
        return;
    }
    if ($(e.target).hasClass('vote3')){
        $(e.target).removeClass('vote3');
        setCount();
        return;
    }
    $(e.target).addClass('vote1');
    setCount();
}

$('.flipper').on('click', changeColor);
