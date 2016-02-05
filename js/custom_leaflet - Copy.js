	var map = L.map('map').setView([56, 20]);	
	
	map.fitBounds([
		[36.5, -20],
		[68, 60]
	]);


	var host = 'http://localhost:8080/geoserver/LULC_WebGIS/wms';

	var ADMlayer = L.tileLayer.wms(host, {
		layers: 'LULC_WebGIS:Europe_Country_EPSG3035',
		format: 'image/png',
		transparent: true,
		version: '1.3.0',
		tiled:true,
		styles: 'LULC_WebGIS:Europe_Contries',
		zIndex: "100",
	});

	var GLC2000 = L.tileLayer.wms(host, {
		layers: 'LULC_WebGIS:GLC2000_EPSG3035_AOI',
		format: 'image/png',
		transparent: true,
		version: '1.3.0',
		tiled:true,
		zIndex: "9",
	});
	
	var Corine = L.tileLayer.wms(host, {
		layers: 'LULC_WebGIS:Corine_EPSG3035_AOI',
		format: 'image/png',
		transparent: true,
		version: '1.3.0',
		tiled:true,
		zIndex: "8",
	});
	
	var GlobCover = L.tileLayer.wms(host, {
		layers: 'LULC_WebGIS:GlobCover_EPSG3035_AOI',
		format: 'image/png',
		transparent: true,
		version: '1.3.0',
		tiled:true,
		zIndex: "7",
	});
	
	var MODIS = L.tileLayer.wms(host, {
		layers: 'LULC_WebGIS:MODIS_EPSG3035_AOI',
		format: 'image/png',
		transparent: true,
		version: '1.3.0',
		tiled:true,
		zIndex: "6",
	});
	
	var ESA = L.tileLayer.wms(host, {
		layers: 'LULC_WebGIS:ESA_EPSG3035_AOI',
		format: 'image/png',
		transparent: true,
		version: '1.3.0',
		tiled:true,
		zIndex: "5",
	});
	
	var GLand30 = L.tileLayer.wms(host, {
		layers: 'LULC_WebGIS:Pyramids',
		format: 'image/png',
		transparent: true,
		version: '1.3.0',
		tiled:true,
		zIndex: "4",
		
	});
	
	var OSM = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		zIndex: "1",
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
	
	

