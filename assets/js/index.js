jQuery(document).ready(function(){
    jQuery("#navigationBar .open-navbar").click(function(){
        jQuery("#navigationBar .content-mobile").toggleClass('active');
    });

    jQuery("#navigationBar .close-navbar").click(function(){
        jQuery("#navigationBar .content-mobile").toggleClass('active');
    });
})