
$('.filter-js').click(function () {
    var toggleColor = $(this).attr("data-image");
    var modal = $(this).attr("datas");

    $(".picture").removeClass("selected-color");
    $("[data-image=" + toggleColor + "]").addClass('selected-color');

    $(".content, .span").removeClass("show");
    $("[datas=" + modal + "]").addClass('show');
});


