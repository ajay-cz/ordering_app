/**
 *
 */

$(document).ready(function () {
    // Initialize Bootstrap Material Theme
    $.material.init();

    // Code to Try loading the Partial Page
    $('a[role=page-nav]').off('click').on('click', function (event) {
        var clicked_link = $(this), link = $(clicked_link).attr('href');
        if (link) {
            event.preventDefault();
            $.ajax({
                url: 'partials' + link + '.html',
                type: 'GET'
            }).done(function(data, textStatus, jqXHR){
                $('#body-content').html($.parseHTML(data));
                // Highlights the corresponding link
                $('a[role=page-nav]').parents().removeClass('active');
                $(clicked_link).parent().addClass('active');
                // Primitive Version of Pushstate
                window.history.pushState(null, "", link);
            }).fail(function( jqXHR, textStatus, errorThrown){
                if (jqXHR && jqXHR.status === 404) {
                    alert(link + '.html Not Found under partials directory ! Check https://github.com/ajay-cz/ordering_app/wiki/Rules-to-follow')
                }
            })
        }
        else {
            alert('Kindly check the anchor tag . For a New Page Link, add <a role="page-nav" href="/<path_to_navigate>" ...></a>')
        }
    });
    $('#home').trigger('click');
});