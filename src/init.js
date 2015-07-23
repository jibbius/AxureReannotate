/* Fix issue where this file gets loaded twice */
if (typeof axureReannotate === 'undefined') {
    var axureReannotate = true;

    jQuery( document ).ready(function() {
        /* JS */
        var annoID = 1;

        jQuery("#mainFrame").contents().find("div.annnoteimage").each(function () {
            jQuery(this).html(annoID);
            annoID += 1;
        });

        /* Load CSS */
        var cssId, cssHref;
        cssId = 'axureReannotateCss';
        cssHref = 'css/axureReannotate.css';

        var iframe = document.getElementById('mainFrame');
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        var head  = innerDoc.getElementsByTagName('head')[0];
        var link  = innerDoc.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = chrome.extension.getURL(cssHref);
        link.media = 'all';
        head.appendChild(link);
    });
}
