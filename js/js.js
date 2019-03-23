var x1 = 1;
var x2 = 1;
var x3 = 1;
var x4 = 1;

window.setInterval(function () {
    $('.logodesign h4').html(x1);

    if (x1 != 795) {
        x1++;
    }
}, 12);
window.setInterval(function () {
   $('.websites h4').html(x2);

    if (x2 != 1459) {
        x2++;
    }

    
}, 8);
window.setInterval(function () {
     $('.wordpress h4').html(x3);

    if (x3 != 359) {
        x3++;
    }
    
}, 20);
window.setInterval(function () {
      $('.happycustomers h4').html(x4);

    if (x4 != 2459) {
        x4++;
    }
    
}, 5);

$(document).ready(function () {
    $("#home").click(function () {
            $('html, body').animate({
                scrollTop: $(".bgimg").offset().top
            }, 1000)
        }),
        $("#about").click(function () {
            $('html, body').animate({
                scrollTop: $(".about-me").offset().top
            }, 1000)
        }),
        $("#work").click(function () {
            $('html, body').animate({
                scrollTop: $(".whatido").offset().top
            }, 1000)
        }),
        $("#portfolio").click(function () {
            $('html, body').animate({
                scrollTop: $(".my-portfolio").offset().top
            }, 1000)
        }),
        $("#hireMe").click(function () {
            $('html, body').animate({
                scrollTop: $(".contactus").offset().top
            }, 1000)
        })
});