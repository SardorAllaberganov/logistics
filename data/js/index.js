$(document).ready(function () {
    $(".header-title-image").fadeIn(1000);
    $(".search-btn").on("click", function (e) {
        $(".search-input").fadeIn();
        $(".search-btn").css('opacity', '0');    
        e.stopPropagation();
    });
    $(".search-input").on("click", function (e) {
        e.stopPropagation();
    });
    $(document).on("click", function () {
        $(".search-input").fadeOut();
        $(".search-btn").css('opacity', '1');  
    });

    $(".gallery img").on("click", function(){
        $("#modalImg").addClass("show").css("display", "block");
        var image = $(this).attr("src");
        $("#popupImg").attr("src", image);
    })
    $(".closeImgModal").on("click", function(){
        $("#modalImg").addClass("hide").css("display", "none");
    })

});