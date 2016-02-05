jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});

	function updateOpacity(layer) {	
		myVar = eval(layer.id);	
		//alert('Value: ' + layer.value + ', myLayers: ' + _leaflet_id);	
	
		var _leaflet_id = layer.id;
	
		if (_leaflet_id) {
			myVar.setOpacity(layer.value);
		}
	};
	
	
	$( "input" ).click(function( event ) {
        layerClicked = window[event.target.value];

            if (map.hasLayer(layerClicked)) {
                map.removeLayer(layerClicked);
            }
            else{
                map.addLayer(layerClicked);
            } ;
    });
	
	
	function sortLegend() {
		// http://stackoverflow.com/questions/10020881/order-divs-based-on-an-attribute-value-in-jquery
	
		var $wrapper = $('.unsorted');

		$wrapper.find('.leg').sort(function (a, b) {
			return +a.getAttribute('rel') - +b.getAttribute('rel');
		})
		.appendTo( $wrapper );

	};
	
	
	$("#LULC").sortable({		
					
		update: function(e, ui) {
		$("#LULC div").each(function(i, elm) {
			
			$("fieldset").hide();
			var name = ($(this).attr('id'));
			var index = i;
			
			//window.alert(  'name: ' +  name + '  index : ' +  index);
			
			//$elm = $(elm); // cache the jquery object
			//$elm.attr("id", $elm.index("#LULC div"));

			//var name = $elm.text().split("id")[0].trim();
			//var index = $elm.attr("id");
			var ID_leg = ("leg_" + name);
			var index_ID = 100-index;	

			eval(name).setZIndex(index_ID);

			//ADMlayer always on top
			eval("ADMlayer").setZIndex(1000);
			
			var x = document.getElementById(ID_leg);  
			//var value = x.getAttribute("rel");			
		
			if (x.hasAttribute("rel")) {       
				x.setAttribute("rel", index);
			}	

			//var x2 = document.getElementById(ID_leg);  
			//var value2 = x.getAttribute("rel");	
			
			sortLegend ();

		});	
	  }
	});	
	
	
	$("#base").sortable({		
					
		update: function(e, ui) {
		$("#base div").each(function(i, elm) {
			
			$("fieldset").hide();
			var name = ($(this).attr('id'));
			var index = i;

			var ID_leg = ("leg_" + name);
			var index_ID = 20-index;	

			eval(name).setZIndex(index_ID);

			var x = document.getElementById(ID_leg);  
		
			if (x.hasAttribute("rel")) {       
				x.setAttribute("rel", index);
			}	

		});	
	  }
	});	
	
	function expand(className) {		
		
		if ($(className).is(':visible')) {
            $(className).hide();
        } 
        else {
            $(className).show();
        }	
	};
	
	function showLegend(legend) {		
			
		var e = document.getElementById(legend);
		if(e.style.display == 'block')
			e.style.display = 'none';
		else
			e.style.display = 'block';	
	};
	
	function toggle(className, obj, legend) {
		
	
		if (legend) {
			showLegend(legend);			
		}		
	};

	$("input[type='checkbox']").change(function(){
		if($(this).is(":checked")){
			$(this).parent().addClass("checkedBackground"); 
		}else{
			$(this).parent().removeClass("checkedBackground");  
		}
	});
	
	

