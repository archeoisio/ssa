var size = 0;
var placement = 'point';

var style_labels_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "12px 'Roboto Black', sans-serif";
    var labelFill = "#000000";   // Testo Nero
    var bufferColor = "#ffffff"; // Alone bianco dietro al testo per leggibilità
    var bufferWidth = 2;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("SEZIONE") !== null && resolution > 0 && resolution < 280) {
        labelText = String(feature.get("SEZIONE"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(231,113,72,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
