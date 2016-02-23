### L.GeoJSON.WFS

Extension of the original WFS class developed within the azgs-packaged. This is a branch of the entire package but only the WFS layer is modified.

- Purpose: A WFS-layer that works with all geometry types and WFS vendors. Also additional functionality, such as smart adding of features – not adding features that already exists (requires specifying a uniqueKey in options).
- Usage Example:
```
var geojsonWfsLayer = new L.GeoJSON.WFS("http://geoserver.smap.se/geoserver/wfs", {
    	 	attribution: "Malmö stads WFS",  //  Copyright etc.
    	 	inputCrs: "EPSG:3008",   // proj used in the request and for handling the response (for converting to WGS84). If not specified, uses EPSG:4326 (WGS84)
    	 	reverseAxis: false,    // true => service returns coords as [northing, easting]
    	 	reverseAxisBbox: false,    // true => if the bbox request coords should be as [northing, easting]
    	 	
    	 	// uniqueKey.
    	 	// Value of this property must be unique (e.g. an ID). Required for creating a link to the map with one of the features selected
    	 	// If specified => only new features are added on load.
    	 	// If null => layer is always cleared and replaced with new features on load.
    	 	// Can also be given as two properties, e.g. "some_attribute,property2"
    	 	uniqueKey: null,  
    	 	
    	 	params: {  // overrides default params
	    	 	typeName: "malmows:STADSDEL_L",  // required
				version: "1.1.0",
				maxFeatures: 10000,
				format: "text/geojson",
				outputFormat: "json"
     		},
     		style: {
     			weight: 6,
     			color: '#F00',
     			dashArray: '',
     			opacity: 0.1
     		},
     		selectStyle: {
    			weight: 5,
    	        color: '#00FF00',
    	        opacity: 1
    		}
});
```
