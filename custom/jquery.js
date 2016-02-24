$( document ).ready(function() {
    console.log( "ready!" );

    // Uncheck the checkboxes (problem in Firefox)
    $('input:checkbox').removeAttr('checked');

    // Accordeon - expand layer panels
    $(function() {

        $( "#accordion" )
        .accordion({
          header: "> div > h3",
          heightStyle: "content",
          collapsible: false,
          active: false,
          icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }

        })
        .sortable({
          axis: "y",
          handle: "h3",
          stop: function( event, ui ) {
            // IE doesn't register the blur when sorting
            // so trigger focusout handlers to remove .ui-state-focus
            ui.item.children( "h3" ).triggerHandler( "focusout" );

            // Refresh accordion to handle new order
            $( this ).accordion( "refresh" );
          }
        });


        $( "#expand" ).on( "click", function() {
          $('.ui-widget-content').show();


        });
    });






    //
    // $("#expand").button().toggle(function() {
    //    $(this).button('option', 'label', 'Stop');
    // }, function() {
    //    $(this).button('option', 'label', 'Start');
    // });
    //

});
