var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Berlin_Februar2021_1 = new ol.format.GeoJSON();
var features_Berlin_Februar2021_1 = format_Berlin_Februar2021_1.readFeatures(json_Berlin_Februar2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Berlin_Februar2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Berlin_Februar2021_1.addFeatures(features_Berlin_Februar2021_1);
var lyr_Berlin_Februar2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Berlin_Februar2021_1, 
                style: style_Berlin_Februar2021_1,
                interactive: true,
                title: '<img src="styles/legend/Berlin_Februar2021_1.png" /> Berlin_Februar2021'
            });
var format_Wall_PDF_2010_Cafe_Achteck_2 = new ol.format.GeoJSON();
var features_Wall_PDF_2010_Cafe_Achteck_2 = format_Wall_PDF_2010_Cafe_Achteck_2.readFeatures(json_Wall_PDF_2010_Cafe_Achteck_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wall_PDF_2010_Cafe_Achteck_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wall_PDF_2010_Cafe_Achteck_2.addFeatures(features_Wall_PDF_2010_Cafe_Achteck_2);
var lyr_Wall_PDF_2010_Cafe_Achteck_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wall_PDF_2010_Cafe_Achteck_2, 
                style: style_Wall_PDF_2010_Cafe_Achteck_2,
                interactive: true,
                title: '<img src="styles/legend/Wall_PDF_2010_Cafe_Achteck_2.png" /> Wall_PDF_2010_Cafe_Achteck'
            });
var format_Wall_PDF_2010_CityToilette_3 = new ol.format.GeoJSON();
var features_Wall_PDF_2010_CityToilette_3 = format_Wall_PDF_2010_CityToilette_3.readFeatures(json_Wall_PDF_2010_CityToilette_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wall_PDF_2010_CityToilette_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wall_PDF_2010_CityToilette_3.addFeatures(features_Wall_PDF_2010_CityToilette_3);
var lyr_Wall_PDF_2010_CityToilette_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wall_PDF_2010_CityToilette_3, 
                style: style_Wall_PDF_2010_CityToilette_3,
                interactive: true,
                title: '<img src="styles/legend/Wall_PDF_2010_CityToilette_3.png" /> Wall_PDF_2010_City-Toilette'
            });
var format_Wall_PDF_2010_nicht_Auffindbar_4 = new ol.format.GeoJSON();
var features_Wall_PDF_2010_nicht_Auffindbar_4 = format_Wall_PDF_2010_nicht_Auffindbar_4.readFeatures(json_Wall_PDF_2010_nicht_Auffindbar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wall_PDF_2010_nicht_Auffindbar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wall_PDF_2010_nicht_Auffindbar_4.addFeatures(features_Wall_PDF_2010_nicht_Auffindbar_4);
var lyr_Wall_PDF_2010_nicht_Auffindbar_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wall_PDF_2010_nicht_Auffindbar_4, 
                style: style_Wall_PDF_2010_nicht_Auffindbar_4,
                interactive: true,
                title: '<img src="styles/legend/Wall_PDF_2010_nicht_Auffindbar_4.png" /> Wall_PDF_2010_nicht_Auffindbar'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Berlin_Februar2021_1.setVisible(true);lyr_Wall_PDF_2010_Cafe_Achteck_2.setVisible(true);lyr_Wall_PDF_2010_CityToilette_3.setVisible(true);lyr_Wall_PDF_2010_nicht_Auffindbar_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Berlin_Februar2021_1,lyr_Wall_PDF_2010_Cafe_Achteck_2,lyr_Wall_PDF_2010_CityToilette_3,lyr_Wall_PDF_2010_nicht_Auffindbar_4];
lyr_Berlin_Februar2021_1.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Address_head': 'Address_head', 'Address_street': 'Address_street', 'Zip': 'Zip', 'District': 'District', 'URL': 'URL', });
lyr_Wall_PDF_2010_Cafe_Achteck_2.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Address': 'Address', 'City': 'City', 'District': 'District', 'Price': 'Price', 'field_7': 'field_7', });
lyr_Wall_PDF_2010_CityToilette_3.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Anschrift': 'Anschrift', 'City': 'City', 'Bezirk': 'Bezirk', 'Gebuehr': 'Gebuehr', 'Anmerkung': 'Anmerkung', });
lyr_Wall_PDF_2010_nicht_Auffindbar_4.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Anschrift': 'Anschrift', 'City': 'City', 'Bezirk': 'Bezirk', 'Gebuehr': 'Gebuehr', 'Anmerkung': 'Anmerkung', });
lyr_Berlin_Februar2021_1.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Address_head': 'TextEdit', 'Address_street': 'TextEdit', 'Zip': 'TextEdit', 'District': 'TextEdit', 'URL': 'TextEdit', });
lyr_Wall_PDF_2010_Cafe_Achteck_2.set('fieldImages', {'Latitude': '', 'Longitude': '', 'Address': '', 'City': '', 'District': '', 'Price': '', 'field_7': '', });
lyr_Wall_PDF_2010_CityToilette_3.set('fieldImages', {'latitude': '', 'longitude': '', 'Anschrift': '', 'City': '', 'Bezirk': '', 'Gebuehr': '', 'Anmerkung': '', });
lyr_Wall_PDF_2010_nicht_Auffindbar_4.set('fieldImages', {'latitude': '', 'longitude': '', 'Anschrift': '', 'City': '', 'Bezirk': '', 'Gebuehr': '', 'Anmerkung': '', });
lyr_Berlin_Februar2021_1.set('fieldLabels', {'Latitude': 'no label', 'Longitude': 'no label', 'Address_head': 'no label', 'Address_street': 'no label', 'Zip': 'no label', 'District': 'no label', 'URL': 'no label', });
lyr_Wall_PDF_2010_Cafe_Achteck_2.set('fieldLabels', {'Latitude': 'no label', 'Longitude': 'no label', 'Address': 'no label', 'City': 'no label', 'District': 'no label', 'Price': 'no label', 'field_7': 'no label', });
lyr_Wall_PDF_2010_CityToilette_3.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'Anschrift': 'no label', 'City': 'no label', 'Bezirk': 'no label', 'Gebuehr': 'no label', 'Anmerkung': 'no label', });
lyr_Wall_PDF_2010_nicht_Auffindbar_4.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'Anschrift': 'no label', 'City': 'no label', 'Bezirk': 'no label', 'Gebuehr': 'no label', 'Anmerkung': 'no label', });
lyr_Wall_PDF_2010_nicht_Auffindbar_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});