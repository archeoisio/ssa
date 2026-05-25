var size = 0;
var placement = 'point';

var style_affore23_8 = function(feature, resolution){
    var context = { feature: feature, variables: {} };
    var labelText = ""; 
    var value = feature.get("% ore 23");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = ""; var bufferWidth = 0;
    if ("" !== null) { labelText = String(""); }
    
    if (value >= 0.000000 && value <= 15.000000) {
        style = [ new ol.style.Style({
            image: new ol.style.Circle({radius: 5.0 + size, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(108,199,29,1.0)'})}),
            text: createTextStyle(feature, resolution, labelText, labelFont, labelFill, placement, bufferColor, bufferWidth)
        })]
    } else if (value > 15.000000 && value <= 20.000000) {
        style = [ new ol.style.Style({
            image: new ol.style.Circle({radius: 9.5 + size, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(108,199,29,1.0)'})}),
            text: createTextStyle(feature, resolution, labelText, labelFont, labelFill, placement, bufferColor, bufferWidth)
        })]
    } else if (value > 20.000000 && value <= 40.000000) {
        style = [ new ol.style.Style({
            image: new ol.style.Circle({radius: 14.0 + size, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(108,199,29,1.0)'})}),
            text: createTextStyle(feature, resolution, labelText, labelFont, labelFill, placement, bufferColor, bufferWidth)
        })]
    } else if (value > 40.000000 && value <= 60.000000) {
        style = [ new ol.style.Style({
            image: new ol.style.Circle({radius: 18.5 + size, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(108,199,29,1.0)'})}),
            text: createTextStyle(feature, resolution, labelText, labelFont, labelFill, placement, bufferColor, bufferWidth)
        })]
    } else if (value > 60.000000 && value <= 80.000000) {
        style = [ new ol.style.Style({
            image: new ol.style.Circle({radius: 23.0 + size, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(108,199,29,1.0)'})}),
            text: createTextStyle(feature, resolution, labelText, labelFont, labelFill, placement, bufferColor, bufferWidth)
        })]
    } else { style = []; }
    return style;
};
