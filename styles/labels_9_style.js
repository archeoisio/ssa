var size = 0;
var placement = 'point';

var style_labels_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    // Recupera il testo dalla colonna 'SEZIONE' del tuo database
    var labelText = "";
    if (feature.get("SEZIONE") !== null) {
        labelText = String(feature.get("SEZIONE"));
    }
    
    var labelFont = "12px 'Arial', sans-serif";
    var labelFill = "#333333"; // Colore del testo (Grigio scuro/Nero)
    var bufferColor = "#ffffff"; // Contorno bianco per rendere leggibile il testo sulla mappa
    var bufferWidth = 3;         // Spessore del contorno bianco
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';

    var style = [ new ol.style.Style({
        // Abbiamo rimosso la parte 'image:' o 'stroke/fill' del punto geometrico.
        // Lasciamo solo il componente del testo.
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY)
    })];

    return style;
};
