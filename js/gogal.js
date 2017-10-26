$("document").ready(function(){
    $(".navButton").click(function(){
        $(".navButton").removeClass("active");
        $(this).addClass("active");
    });
});