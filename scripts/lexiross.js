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

    
    jQuery("#projects-heading").click(function() {
        if (jQuery("#projects").hasClass("visible")) {
            jQuery("#projects").slideUp();
            jQuery("#projects").removeClass("visible");
            jQuery("#projects-plus").html("+");
        } else {
            jQuery("#projects").slideDown();
            jQuery("#projects").addClass("visible");
            jQuery("#projects-plus").html("-");
        }
    });


    jQuery("#contact-heading").click(function() {
        if (jQuery("#contact").hasClass("visible")) {
            jQuery("#contact").slideUp();
            jQuery("#contact").removeClass("visible");
            jQuery("#contact-plus").html("+");
        } else {
            jQuery("#contact").slideDown();
            jQuery("#contact").addClass("visible");
            jQuery("#contact-plus").html("-");
        }
    });
});



//TODO: clean up scriptaculous files
