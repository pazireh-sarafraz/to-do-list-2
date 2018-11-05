$(function () {
    
    // show modal by click on Hello btn
    $("header .logo-btn button").click(function () {
        $(this).children(".modal-container").removeClass("show");
        $(this).children(".modal-container").removeClass("hide");
        $(this).children(".modal-container").addClass("show");
    });

    
    // hide modal by click on icon-close btn
    $("header .logo-btn button .modal-container .modal i.icon-close").click(function () {

        console.log($(this).parent().parent());
        $(this).parent().parent().removeClass("show");
        $(this).parent().parent().removeClass("hide");
        $(this).parent().parent().addClass("hide");
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
