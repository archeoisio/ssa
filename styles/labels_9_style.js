var size = 0;
var placement = 'point';

var style_labels_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = "";
    
    // Metodo 1: Tentativo standard di OpenLayers
    if (feature.get("SEZIONE") !== undefined && feature.get("SEZIONE") !== null) {
        labelText = String(feature.get("SEZIONE"));
    } 
    // Metodo 2: Tentativo tramite le proprietà native del GeoJSON (il trucco per qgis2web)
    else if (feature.getProperties() && feature.getProperties()["SEZIONE"] !== undefined) {
        labelText = String(feature.getProperties()["SEZIONE"]);
    }
    // Metodo 3: Se falliscono i precedenti, cerca un campo ID per non mostrare "Undefined"
    else if (feature.get("id") !== undefined && feature.get("id") !== null) {
        labelText = String(feature.get("id"));
    } else {
        labelText = ""; // Lascia vuoto invece di scrivere Undefined se non trova nulla
    }
    
    var labelFont = "12px 'Arial', sans-serif";
    var labelFill = "#333333"; 
    var bufferColor = "#ffffff"; 
    var bufferWidth = 3;         
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';

    var style = [ new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY)
    })];

    return style;
};
