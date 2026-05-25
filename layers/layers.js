var wms_layers = [];

var format_confinisal_0 = new ol.format.GeoJSON();
var features_confinisal_0 = format_confinisal_0.readFeatures(json_confinisal_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_confinisal_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_confinisal_0.addFeatures(features_confinisal_0);
var lyr_confinisal_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_confinisal_0, 
                style: style_confinisal_0,
                popuplayertitle: 'confinisal',
                interactive: false,
                title: '<img src="styles/legend/confinisal_0.png" /> confinisal'
            });
var format_CURVELIVELLOSA_1 = new ol.format.GeoJSON();
var features_CURVELIVELLOSA_1 = format_CURVELIVELLOSA_1.readFeatures(json_CURVELIVELLOSA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CURVELIVELLOSA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CURVELIVELLOSA_1.addFeatures(features_CURVELIVELLOSA_1);
var lyr_CURVELIVELLOSA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CURVELIVELLOSA_1, 
                style: style_CURVELIVELLOSA_1,
                popuplayertitle: 'CURVELIVELLO-SA',
                interactive: false,
                title: '<img src="styles/legend/CURVELIVELLOSA_1.png" /> CURVELIVELLO-SA'
            });
var format_WATERWAYSSA_2 = new ol.format.GeoJSON();
var features_WATERWAYSSA_2 = format_WATERWAYSSA_2.readFeatures(json_WATERWAYSSA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WATERWAYSSA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATERWAYSSA_2.addFeatures(features_WATERWAYSSA_2);
var lyr_WATERWAYSSA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WATERWAYSSA_2, 
                style: style_WATERWAYSSA_2,
                popuplayertitle: 'WATERWAYS-SA',
                interactive: false,
                title: '<img src="styles/legend/WATERWAYSSA_2.png" /> WATERWAYS-SA'
            });
var format_STRADESA_3 = new ol.format.GeoJSON();
var features_STRADESA_3 = format_STRADESA_3.readFeatures(json_STRADESA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STRADESA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STRADESA_3.addFeatures(features_STRADESA_3);
var lyr_STRADESA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STRADESA_3, 
                style: style_STRADESA_3,
                popuplayertitle: 'STRADE-SA',
                interactive: false,
                title: '<img src="styles/legend/STRADESA_3.png" /> STRADE-SA'
            });
var format_RAILSA_4 = new ol.format.GeoJSON();
var features_RAILSA_4 = format_RAILSA_4.readFeatures(json_RAILSA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAILSA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAILSA_4.addFeatures(features_RAILSA_4);
var lyr_RAILSA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAILSA_4, 
                style: style_RAILSA_4,
                popuplayertitle: 'RAIL-SA',
                interactive: false,
                title: '<img src="styles/legend/RAILSA_4.png" /> RAIL-SA'
            });
var format_EDIFICISA_5 = new ol.format.GeoJSON();
var features_EDIFICISA_5 = format_EDIFICISA_5.readFeatures(json_EDIFICISA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EDIFICISA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDIFICISA_5.addFeatures(features_EDIFICISA_5);
var lyr_EDIFICISA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDIFICISA_5, 
                style: style_EDIFICISA_5,
                popuplayertitle: 'EDIFICI-SA',
                interactive: false,
                title: '<img src="styles/legend/EDIFICISA_5.png" /> EDIFICI-SA'
            });
var format_affore12_6 = new ol.format.GeoJSON();
var features_affore12_6 = format_affore12_6.readFeatures(json_affore12_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_affore12_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_affore12_6.addFeatures(features_affore12_6);
var lyr_affore12_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_affore12_6, 
                style: style_affore12_6,
                popuplayertitle: 'aff ore 12',
                interactive: true,
    title: 'aff ore 12<br />\
    <img src="styles/legend/affore12_6_0.png" /> 8 - 10<br />\
    <img src="styles/legend/affore12_6_1.png" /> 10 - 15<br />\
    <img src="styles/legend/affore12_6_2.png" /> 15 - 20<br />' });
var format_affore19_7 = new ol.format.GeoJSON();
var features_affore19_7 = format_affore19_7.readFeatures(json_affore19_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_affore19_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_affore19_7.addFeatures(features_affore19_7);
var lyr_affore19_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_affore19_7, 
                style: style_affore19_7,
                popuplayertitle: 'aff ore 19',
                interactive: true,
    title: 'aff ore 19<br />\
    <img src="styles/legend/affore19_7_0.png" /> 20 - 30<br />\
    <img src="styles/legend/affore19_7_1.png" /> 30 - 35<br />\
    <img src="styles/legend/affore19_7_2.png" /> 35 - 40<br />\
    <img src="styles/legend/affore19_7_3.png" /> 40 - 45<br />' });
var format_affore23_8 = new ol.format.GeoJSON();
var features_affore23_8 = format_affore23_8.readFeatures(json_affore23_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_affore23_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_affore23_8.addFeatures(features_affore23_8);
var lyr_affore23_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_affore23_8, 
                style: style_affore23_8,
                popuplayertitle: 'aff ore 23',
                interactive: true,
    title: 'aff ore 23<br />\
    <img src="styles/legend/affore23_8_0.png" /> 35 - 40<br />\
    <img src="styles/legend/affore23_8_1.png" /> 40 - 45<br />\
    <img src="styles/legend/affore23_8_2.png" /> 45 - 50<br />\
    <img src="styles/legend/affore23_8_3.png" /> 50 - 55<br />\
    <img src="styles/legend/affore23_8_4.png" /> 55 - 61.3<br />' });
var format_labels_9 = new ol.format.GeoJSON();
var features_labels_9 = format_labels_9.readFeatures(json_labels_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_labels_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_labels_9.addFeatures(features_labels_9);
var lyr_labels_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_labels_9, 
                style: style_labels_9,
                popuplayertitle: 'labels',
                interactive: false,
                title: '<img src="styles/legend/labels_9.png" /> labels'
            });

var group_sezioni2021 = new ol.layer.Group({
                                layers: [lyr_affore12_6,lyr_affore19_7,lyr_affore23_8,lyr_labels_9],
                                fold: 'open',
                                title: 'sezioni 2021'});

lyr_confinisal_0.setVisible(true);lyr_CURVELIVELLOSA_1.setVisible(true);lyr_WATERWAYSSA_2.setVisible(true);lyr_STRADESA_3.setVisible(true);lyr_RAILSA_4.setVisible(true);lyr_EDIFICISA_5.setVisible(true);lyr_affore12_6.setVisible(false);lyr_affore19_7.setVisible(false);lyr_affore23_8.setVisible(false);lyr_labels_9.setVisible(true);

// Aggiornato includendo correttamente le strutture e rimuovendo il gruppo H703 che era vuoto e non mappato
var layersList = [lyr_confinisal_0,lyr_CURVELIVELLOSA_1,lyr_WATERWAYSSA_2,lyr_STRADESA_3,lyr_RAILSA_4,lyr_EDIFICISA_5,group_sezioni2021];

lyr_confinisal_0.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'LINKZONA': 'LINKZONA', 'CODCOM': 'CODCOM', 'CODZONA': 'CODZONA', 'Area_terri': 'Area_terri', 'Regione': 'Regione', 'Prov': 'Prov', 'Comune_IST': 'Comune_IST', 'Comune_cat': 'Comune_cat', 'Sez': 'Sez', 'Comune_amm': 'Comune_amm', 'Comune_des': 'Comune_des', 'Fascia': 'Fascia', 'LinkZona_1': 'LinkZona_1', 'Cod_Tip': 'Cod_Tip', 'Descr_Tipo': 'Descr_Tipo', 'Stato': 'Stato', 'Stato_prev': 'Stato_prev', 'Compr_min': 'Compr_min', 'Compr_max': 'Compr_max', 'Sup_NL_com': 'Sup_NL_com', 'Loc_min': 'Loc_min', 'Loc_max': 'Loc_max', 'Sup_NL_loc': 'Sup_NL_loc', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', 'auxiliar_3': 'auxiliar_3', 'auxiliar_4': 'auxiliar_4', 'auxiliar_5': 'auxiliar_5', 'auxiliar_6': 'auxiliar_6', 'auxiliar_7': 'auxiliar_7', 'auxiliar_8': 'auxiliar_8', 'auxiliar_9': 'auxiliar_9', 'auxiliar10': 'auxiliar10', 'auxiliar11': 'auxiliar11', 'auxiliar12': 'auxiliar12', 'auxiliar13': 'auxiliar13', 'auxiliar14': 'auxiliar14', 'auxiliar15': 'auxiliar15', 'auxiliar16': 'auxiliar16', 'auxiliar17': 'auxiliar17', 'auxiliar18': 'auxiliar18', 'auxiliar19': 'auxiliar19', 'auxiliar20': 'auxiliar20', 'auxiliar21': 'auxiliar21', 'auxiliar22': 'auxiliar22', 'auxiliar23': 'auxiliar23', 'auxiliar24': 'auxiliar24', 'auxiliar25': 'auxiliar25', 'auxiliar26': 'auxiliar26', 'auxiliar27': 'auxiliar27', 'auxiliar28': 'auxiliar28', 'auxiliar29': 'auxiliar29', 'auxiliar30': 'auxiliar30', 'auxiliar31': 'auxiliar31', 'auxiliar32': 'auxiliar32', });
lyr_CURVELIVELLOSA_1.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'level': 'level', 'tipo': 'tipo', });
lyr_WATERWAYSSA_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_STRADESA_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_RAILSA_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_EDIFICISA_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_affore12_6.set('fieldAliases', {'id': 'id', 'SEZIONE': 'SEZIONE', '% ore 12': '% ore 12', '% ore 19': '% ore 19', '% ore 23': '% ore 23', });
lyr_affore19_7.set('fieldAliases', {'id': 'id', 'SEZIONE': 'SEZIONE', '% ore 12': '% ore 12', '% ore 19': '% ore 19', '% ore 23': '% ore 23', });
lyr_affore23_8.set('fieldAliases', {'id': 'id', 'SEZIONE': 'SEZIONE', '% ore 12': '% ore 12', '% ore 19': '% ore 19', '% ore 23': '% ore 23', });
lyr_labels_9.set('fieldAliases', {'id': 'id', 'SEZIONE': 'SEZIONE', 'BASSANO N.': 'BASSANO N.', 'BIANCO C.': 'BIANCO C.', 'BLOCH R.': 'BLOCH R.', 'BRACA V.': 'BRACA V.', 'BUONOMO A.': 'BUONOMO A.', 'CARRATU\' L.': 'CARRATU\' L.', 'CRIVELLI C.': 'CRIVELLI C.', 'CUCCURULLO A.': 'CUCCURULLO A.', 'D\'AMATO S.': 'D\'AMATO S.', 'DE LUCA A.': 'DE LUCA A.', 'FERRARA G.': 'FERRARA G.', 'FIGLIUZZI G.': 'FIGLIUZZI G.', 'FORTE L.': 'FORTE L.', 'FREZZA A.': 'FREZZA A.', 'GALDI G.': 'GALDI G.', 'GIGANTINO R.': 'GIGANTINO R.', 'GIORDANO M.': 'GIORDANO M.', 'LEONE C.': 'LEONE C.', 'LO BIANCO M.': 'LO BIANCO M.', 'LOMBARDI R.': 'LOMBARDI R.', 'MARCHESAN E.': 'MARCHESAN E.', 'MARMORO G.': 'MARMORO G.', 'MINOLITI P.': 'MINOLITI P.', 'MUSTO A.': 'MUSTO A.', 'PISANO R.': 'PISANO R.', 'PRISCO S.': 'PRISCO S.', 'ROCCHINO C.': 'ROCCHINO C.', 'ROMEO C.': 'ROMEO C.', 'SABATO R.': 'SABATO R.', 'SILVESTRI G.': 'SILVESTRI G.', 'SMERALDO E.': 'SMERALDO E.', 'TRENTINI G.': 'TRENTINI G.', 'Totale Preferenze': 'Totale Preferenze', 'Votanti': 'Votanti', 'Iscritti': 'Iscritti', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_callouts_originx': 'auxiliary_storage_callouts_originx', 'auxiliary_storage_callouts_originy': 'auxiliary_storage_callouts_originy', 'auxiliary_storage_callouts_destinationx': 'auxiliary_storage_callouts_destinationx', 'auxiliary_storage_callouts_destinationy': 'auxiliary_storage_callouts_destinationy', });
lyr_confinisal_0.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'LINKZONA': 'TextEdit', 'CODCOM': 'TextEdit', 'CODZONA': 'TextEdit', 'Area_terri': 'TextEdit', 'Regione': 'TextEdit', 'Prov': 'TextEdit', 'Comune_IST': 'TextEdit', 'Comune_cat': 'TextEdit', 'Sez': 'TextEdit', 'Comune_amm': 'TextEdit', 'Comune_des': 'TextEdit', 'Fascia': 'TextEdit', 'LinkZona_1': 'TextEdit', 'Cod_Tip': 'TextEdit', 'Descr_Tipo': 'TextEdit', 'Stato': 'TextEdit', 'Stato_prev': 'TextEdit', 'Compr_min': 'TextEdit', 'Compr_max': 'TextEdit', 'Sup_NL_com': 'TextEdit', 'Loc_min': 'TextEdit', 'Loc_max': 'TextEdit', 'Sup_NL_loc': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', 'auxiliar_2': 'TextEdit', 'auxiliar_3': 'TextEdit', 'auxiliar_4': 'TextEdit', 'auxiliar_5': 'TextEdit', 'auxiliar_6': 'TextEdit', 'auxiliar_7': 'TextEdit', 'auxiliar_8': 'TextEdit', 'auxiliar_9': 'TextEdit', 'auxiliar10': 'TextEdit', 'auxiliar11': 'TextEdit', 'auxiliar12': 'TextEdit', 'auxiliar13': 'TextEdit', 'auxiliar14': 'TextEdit', 'auxiliar15': 'TextEdit', 'auxiliar16': 'TextEdit', 'auxiliar17': 'TextEdit', 'auxiliar18': 'TextEdit', 'auxiliar19': 'TextEdit', 'auxiliar20': 'TextEdit', 'auxiliar21': 'TextEdit', 'auxiliar22': 'TextEdit', 'auxiliar23': 'TextEdit', 'auxiliar24': 'TextEdit', 'auxiliar25': 'TextEdit', 'auxiliar26': 'TextEdit', 'auxiliar27': 'TextEdit', 'auxiliar28': 'TextEdit', 'auxiliar29': 'TextEdit', 'auxiliar30': 'TextEdit', 'auxiliar31': 'TextEdit', 'auxiliar32': 'TextEdit', });
lyr_CURVELIVELLOSA_1.set('fieldImages', {'fid': 'TextEdit', 'cat': 'TextEdit', 'level': 'TextEdit', 'tipo': 'TextEdit', });
lyr_WATERWAYSSA_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr_STRADESA_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_RAILSA_4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_EDIFICISA_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_affore12_6.set('fieldImages', {'id': 'TextEdit', 'SEZIONE': 'TextEdit', '% ore 12': 'TextEdit', '% ore 19': 'TextEdit', '% ore 23': 'TextEdit', });
lyr_affore19_7.set('fieldImages', {'id': 'TextEdit', 'SEZIONE': 'TextEdit', '% ore 12': 'TextEdit', '% ore 19': 'TextEdit', '% ore 23': 'TextEdit', });
lyr_affore23_8.set('fieldImages', {'id': 'TextEdit', 'SEZIONE': 'TextEdit', '% ore 12': 'TextEdit', '% ore 19': 'TextEdit', '% ore 23': 'TextEdit', });
lyr_labels_9.set('fieldImages', {'id': 'TextEdit', 'SEZIONE': 'TextEdit', 'BASSANO N.': 'TextEdit', 'BIANCO C.': 'TextEdit', 'BLOCH R.': 'TextEdit', 'BRACA V.': 'TextEdit', 'BUONOMO A.': 'TextEdit', 'CARRATU\' L.': 'TextEdit', 'CRIVELLI C.': 'TextEdit', 'CUCCURULLO A.': 'TextEdit', 'D\'AMATO S.': 'TextEdit', 'DE LUCA A.': 'TextEdit', 'FERRARA G.': 'TextEdit', 'FIGLIUZZI G.': 'TextEdit', 'FORTE L.': 'TextEdit', 'FREZZA A.': 'TextEdit', 'GALDI G.': 'TextEdit', 'GIGANTINO R.': 'TextEdit', 'GIORDANO M.': 'TextEdit', 'LEONE C.': 'TextEdit', 'LO BIANCO M.': 'TextEdit', 'LOMBARDI R.': 'TextEdit', 'MARCHESAN E.': 'TextEdit', 'MARMORO G.': 'TextEdit', 'MINOLITI P.': 'TextEdit', 'MUSTO A.': 'TextEdit', 'PISANO R.': 'TextEdit', 'PRISCO S.': 'TextEdit', 'ROCCHINO C.': 'TextEdit', 'ROMEO C.': 'TextEdit', 'SABATO R.': 'TextEdit', 'SILVESTRI G.': 'TextEdit', 'SMERALDO E.': 'TextEdit', 'TRENTINI G.': 'TextEdit', 'Totale Preferenze': 'TextEdit', 'Votanti': 'TextEdit', 'Iscritti': 'Range', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_callouts_originx': 'TextEdit', 'auxiliary_storage_callouts_originy': 'TextEdit', 'auxiliary_storage_callouts_destinationx': 'TextEdit', 'auxiliary_storage_callouts_destinationy': 'TextEdit', });
lyr_confinisal_0.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'LINKZONA': 'no label', 'CODCOM': 'no label', 'CODZONA': 'no label', 'Area_terri': 'no label', 'Regione': 'no label', 'Prov': 'no label', 'Comune_IST': 'no label', 'Comune_cat': 'no label', 'Sez': 'no label', 'Comune_amm': 'no label', 'Comune_des': 'no label', 'Fascia': 'no label', 'LinkZona_1': 'no label', 'Cod_Tip': 'no label', 'Descr_Tipo': 'no label', 'Stato': 'no label', 'Stato_prev': 'no label', 'Compr_min': 'no label', 'Compr_max': 'no label', 'Sup_NL_com': 'no label', 'Loc_min': 'no label', 'Loc_max': 'no label', 'Sup_NL_loc': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', 'auxiliar_2': 'no label', 'auxiliar_3': 'no label', 'auxiliar_4': 'no label', 'auxiliar_5': 'no label', 'auxiliar_6': 'no label', 'auxiliar_7': 'no label', 'auxiliar_8': 'no label', 'auxiliar_9': 'no label', 'auxiliar10': 'no label', 'auxiliar11': 'no label', 'auxiliar12': 'no label', 'auxiliar13': 'no label', 'auxiliar14': 'no label', 'auxiliar15': 'no label', 'auxiliar16': 'no label', 'auxiliar17': 'no label', 'auxiliar18': 'no label', 'auxiliar19': 'no label', 'auxiliar20': 'no label', 'auxiliar21': 'no label', 'auxiliar22': 'no label', 'auxiliar23': 'no label', 'auxiliar24': 'no label', 'auxiliar25': 'no label', 'auxiliar26': 'no label', 'auxiliar27': 'no label', 'auxiliar28': 'no label', 'auxiliar29': 'no label', 'auxiliar30': 'no label', 'auxiliar31': 'no label', 'auxiliar32': 'no label', });
lyr_CURVELIVELLOSA_1.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'level': 'no label', 'tipo': 'no label', });
lyr_WATERWAYSSA_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr_STRADESA_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_RAILSA_4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_EDIFICISA_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_affore12_6.set('fieldLabels', {'id': 'hidden field', 'SEZIONE': 'inline label - visible with data', '% ore 12': 'inline label - visible with data', '% ore 19': 'hidden field', '% ore 23': 'hidden field', });
lyr_affore19_7.set('fieldLabels', {'id': 'hidden field', 'SEZIONE': 'inline label - visible with data', '% ore 12': 'hidden field', '% ore 19': 'inline label - visible with data', '% ore 23': 'hidden field', });
lyr_affore23_8.set('fieldLabels', {'id': 'hidden field', 'SEZIONE': 'inline label - visible with data', '% ore 12': 'hidden field', '% ore 19': 'hidden field', '% ore 23': 'inline label - visible with data', });
lyr_labels_9.set('fieldLabels', {'id': 'no label', 'SEZIONE': 'no label', 'BASSANO N.': 'no label', 'BIANCO C.': 'no label', 'BLOCH R.': 'no label', 'BRACA V.': 'no label', 'BUONOMO A.': 'no label', 'CARRATU\' L.': 'no label', 'CRIVELLI C.': 'no label', 'CUCCURULLO A.': 'no label', 'D\'AMATO S.': 'no label', 'DE LUCA A.': 'no label', 'FERRARA G.': 'no label', 'FIGLIUZZI G.': 'no label', 'FORTE L.': 'no label', 'FREZZA A.': 'no label', 'GALDI G.': 'no label', 'GIGANTINO R.': 'no label', 'GIORDANO M.': 'no label', 'LEONE C.': 'no label', 'LO BIANCO M.': 'no label', 'LOMBARDI R.': 'no label', 'MARCHESAN E.': 'no label', 'MARMORO G.': 'no label', 'MINOLITI P.': 'no label', 'MUSTO A.': 'no label', 'PISANO R.': 'no label', 'PRISCO S.': 'no label', 'ROCCHINO C.': 'no label', 'ROMEO C.': 'no label', 'SABATO R.': 'no label', 'SILVESTRI G.': 'no label', 'SMERALDO E.': 'no label', 'TRENTINI G.': 'no label', 'Totale Preferenze': 'no label', 'Votanti': 'no label', 'Iscritti': 'no label', 'auxiliary_storage_callouts_originx': 'no label', 'auxiliary_storage_callouts_originy': 'no label', 'auxiliary_storage_callouts_destinationx': 'no label', 'auxiliary_storage_callouts_destinationy': 'no label', });
lyr_labels_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
