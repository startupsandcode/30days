var setCount = function(e){
    $('.count.vote1').text($('.flipper.vote1').length);
    $('.count.vote2').text($('.flipper.vote2').length);
    $('.count.vote3').text($('.flipper.vote3').length);
}

var changeColor = function (e) {
    var classes = ['vote1', 'vote2'];
    var elm = e.target;
    if (elm.nodeName == "IMG"){
        elm = elm.parentElement;
    }
    if ($(elm.parentElement).hasClass('nom')){
        alert('Nominees cannot vote!');
        return;
    }
    if ($(elm.parentElement).hasClass('hoh')){
        alert('HOH cannot vote except in a tie!');
        return;
    }
    
    if ($(elm).hasClass('vote1')){
        $(elm).removeClass('vote1');
        $(elm).addClass('vote2');
        setCount();
        return;
    }
    if ($(elm).hasClass('vote2')){
        $(elm).removeClass('vote2');
        $(elm).addClass('vote3');
        setCount();
        return;
    }
    if ($(elm).hasClass('vote3')){
        $(elm).removeClass('vote3');
        setCount();
        return;
    }
    $(elm).addClass('vote1');
    setCount();
    return;
}

$('div.flipper').on('click', changeColor);


