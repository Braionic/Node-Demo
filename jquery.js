$(document).ready(function(){
    $('button').click(function(){
        $('p').animate({'left': '250px'}, 'slow');
    });
});

$(document).ready(function(){
    $('button').on('click', function(){
        $('p').fadeTo(0.5, 'slow');
    });
});