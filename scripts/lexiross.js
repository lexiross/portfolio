jQuery(document).ready(function() {
    $("#about-heading").click(function() {
        if ($("#about").hasClass("visible")) {
            $("#about").blindUp();
            $("#about").removeClass("visible");
        } else {
            $("#about").blindDown();
            $("#about").addClass("visible");
        }
    });
});
