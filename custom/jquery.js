$( document ).ready(function() {
    console.log( "ready!" );

    // Uncheck the checkboxes (problem in Firefox)
    $('input:checkbox').removeAttr('checked');

    // // JQuery ui tabs
    // $( "#tabs" ).tabs({
    //   heightStyle: "fill"
    // });

    // Accordeon - expand layer panels
    $( "#accordion" )
    .accordion({
      header: "> div > h3",
      heightStyle: "content",
      collapsible: true,
      active: 1,
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
            // console.log( label );
        }
        else {
        	$(this).button( "option", "label", "Expand All" );
            $('.ui-widget-content').hide();
            // console.log( label );
        }
     });

     // Setting button
     $( "#setting" ).button().on( "click", function() {
         var label = $(this).button( "option", "label" );
      });

     // Display Legend and metadata
     $(".boxlayer").change(function() {

         var value = $(this).attr("value");
         var index = $(this).attr("rel");

         var leg = "#leg_" + value
         var tbl = "#tbl_" + value

         if(this.checked) {
             $(leg).show();
             $(tbl).show();
            //  console.log( leg );

        }else{
            $(leg).hide();
            $(tbl).hide();
            // console.log( tbl );
        }

     });



     function sortPannel() {

         var $legCache = $('#legend');
         var $tblCache = $('#tables');

         $legCache.find('.leg').sort(function (a, b) {
             return +a.getAttribute('rel') - +b.getAttribute('rel');
         })
             .appendTo($legCache);

         $tblCache.find('.tbl').sort(function (a, b) {
             return +a.getAttribute('rel') - +b.getAttribute('rel');
         })
             .appendTo($tblCache);
     };


     // Drag and Drop layers
     $( "#lulc" ).sortable({

         update: function (e, ui) {
            $("#lulc div").each(function (i, elm) {

            var name = ($(this).attr('id')),
                 index = i,
                 ID_leg = ("#leg_" + name),
                 ID_table = ("#tbl_" + name),
                 ID_opacity = ("#opy_" + name),
                 index_ID = (100 - index);

                //  console.log("index: " +  index);
                //  console.log("ID_leg: " + ID_leg);

                // Redefine rel value based on the new div sequence
                $(ID_leg).attr('rel', index)
                $(ID_table).attr('rel', index)

                var test =$(ID_leg).attr('rel')
                console.clear()
                console.log(ID_leg + ": rel: " + test);

                sortPannel();

             });
         }
     });





// this.rel += 'theValue';

 //
 //     $(".boxlayer").click(function(){
 //     $("input:checkbox").attr("checked",true);
 // })

// $('.boxlayer').prop('checked', true);
//
// $("input:checked").each(function() {
//       var label = $(this).next();
//       console.log( label );
// });



});
