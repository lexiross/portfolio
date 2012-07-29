jQuery(document).ready(function() {
    jQuery("#about-heading").click(function() {
        if (jQuery("#about").hasClass("visible")) {
            jQuery("#about").slideUp();
            jQuery("#about").removeClass("visible");
            jQuery("#about-plus").html("+");
        } else {
            jQuery("#about").slideDown();
            jQuery("#about").addClass("visible");
            jQuery("#about-plus").html("-");
        }
    });
});

//TODO: clean up scriptaculous files
