var second = 27, second_display = 10;
var second_div;
var red, yellow, green;
$(document).ready(function() {
    red =  $('#red');
    yellow = $('#yellow');
    green = $('#green');
    second_div = $('#second');
    setInterval(function(){main()}, 1000);
});

function main (){
    switch(second) {
        case 27:
            red.css('background-color', 'red');
            second_div.css('color', 'red');
            second_display = 10;
            break;
        case 17:
            yellow.css('background-color', 'yellow');
            second_div.css('color', 'yellow');
            second_display = 2;
            break;
        case 15:
            red.css('background-color', '#3a0000');
            yellow.css('background-color', '#464600');
            green.css('background-color', '#00BA00');
            second_div.css('color', '#00BA00');
            second_display = 15;
            break;
        case 3:
            for (var i = 0; i < 3; i++){
                green.fadeOut(500).fadeIn(500);
            }
            break;
        case 0:
            red.css('background-color', 'red');
            second_div.css('color', 'red');
            green.css('background-color', '#003000');
            second = 27;
            second_display = 10;
            break;
    }
    second_div.html(second_display);
    second--;
    second_display--;
}