$( document ).ready(function() {
    console.log( "ready!" );

    // Uncheck the checkboxes (problem in Firefox)
    $('input:checkbox').removeAttr('checked');

    // JQuery ui tabs
    $( "#tabs" ).tabs({
      heightStyle: "fill"
    });

    // Accordeon - expand layer panels
    $( "#accordion" )
    .accordion({
      header: "> div > h3",
      heightStyle: "content",
      collapsible: true,
      active: false,
      icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" },

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

    // Expand All button
    $( "#expand" ).button().on( "click", function() {
        var label = $(this).button( "option", "label" );
        if(label === "Expand All") {
        	$(this).button( "option", "label", "Collapse All" );
            $('.ui-widget-content').show();
        }
        else {
        	$(this).button( "option", "label", "Expand All" );
            $('.ui-widget-content').hide();
        }
     });

     // Setting button
     $( "#setting" ).button().on( "click", function() {
         var label = $(this).button( "option", "label" );
      });





});
