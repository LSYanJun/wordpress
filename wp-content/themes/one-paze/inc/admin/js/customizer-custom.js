jQuery(document).ready(function ($) {
/*Sticky user note  */
    $('#accordion-section-title_tagline').prepend(
        '<div class="user_sticky_note">'+
        '<span class="sticky_info_row"><a class="button" href="http://demo.accesspressthemes.com/one-paze/" target="_blank">Live Demo</a>'+
        '<span class="sticky_info_row"><a class="button" href="http://accesspressthemes.com/documentation/one-paze-doc/" target="_blank">Documentation</a></span>'+
        '<span class="sticky_info_row"><a class="button" href="https://accesspressthemes.com/support/forum/themes/free-themes/one-paze/" target="_blnak">Support Forum</a></span>'+
        '<span class="sticky_info_row"><a class="button" href="support@accesspressthemes.com">support@accesspressthemes.com<a/></span>'+
        '</div>'
    );  
}); // Document Load Complete

jQuery(window).load(function() {

    var upgrade_notice = '<a class="upgrade-pro" target="_blank" href="https://accesspressthemes.com/wordpress-themes/one-paze-pro/">UPGRADE TO ONE PAZE PRO</a>';
    upgrade_notice += '<a class="upgrade-pro" target="_blank" href="http://accesspressthemes.com/theme-demos/?theme=one-paze-pro">ONE PAZE PRO DEMO</a>';
    jQuery('#customize-info .preview-notice').append(upgrade_notice);
});