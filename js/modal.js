$(function () {
    
    // show modal by click on Hello btn
    $("header .logo-btn button").click(function () {
        $("#modal-container").removeClass("show");
        $("#modal-container").removeClass("hide");
        $("#modal-container").addClass("show");
    });

    
    // hide modal by click on icon-close btn
    $("#modal-container i.icon-close").click(function () {
        $("#modal-container").removeClass("show");
        $("#modal-container").removeClass("hide");
        $("#modal-container").addClass("hide");
    });


    // change header bgcr while scrolling
    var scrollPosition = 0;
    $(document).scroll(function(){
        scrollPosition = $(this).scrollTop();
        if (scrollPosition > 10) {
            $("header").removeClass("change-color");
            $("header").addClass("change-color");
        } else {
            $("header").removeClass("change-color");
        }
    });
    
});
