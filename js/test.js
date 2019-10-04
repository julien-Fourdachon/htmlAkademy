
$('.filter-js').click(function () {
    var toggleColor = $(this).attr("data-image");
    var modal = $(this).attr("data-modal");

    $(".picture").removeClass("selected-color");
    $("[data-image=" + toggleColor + "]").addClass('selected-color');

    $(".content, .span").removeClass("show");
    $("[data-modal=" + modal + "]").addClass('show');
});


