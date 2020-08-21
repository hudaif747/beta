var count = 2;

$(document).ready(function () {
    $('#addrows').click(function () {
        $("#eq" + count).css({
            "opacity": "0",
            "display": "block",
        }).animate({
            opacity: 1
        }, 800);
        count = count + 1;
    })
})