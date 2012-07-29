jQuery(document).ready(function() {
    jQuery("#about-heading").click(function() {
        if (jQuery("#about").hasClass("visible")) {
            jQuery("#about").blindUp();
            jQuery("#about").removeClass("visible");
        } else {
            jQuery("#about").blindDown();
            jQuery("#about").addClass("visible");
        }
    });
});
