import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "sans-serif",
        "textAlign": "center",
        "backgroundColor": "rgb(83, 171, 158)",
        "color": "white"
    },
    "Aligner": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "height": "80%"
    },
    "status": {
        "display": "none",
        "marginBottom": 20
    },
    "clock": {
        "fontSize": 30
    },
    "h1": {
        "fontSize": 60
    },
    "joko": {
        "borderRadius": 0,
        "backgroundColor": "rgb(36, 157, 201)",
        "color": "white",
        "border": "none",
        "paddingTop": 30,
        "paddingRight": 60,
        "paddingBottom": 30,
        "paddingLeft": 60,
        "fontSize": 30,
        "marginTop": 20
    },
    "joko:hover": {
        "backgroundColor": "rgb(0, 75, 130)",
        "cursor": "pointer"
    },
    "Aligner-item": {
        "maxWidth": "50%"
    },
    "clock-container": {
        "display": "flex",
        "flexFlow": "row wrap",
        "justifyContent": "space-around"
    },
    "child": {
        "width": 100,
        "height": 100,
        "borderRadius": 50,
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "background": "linear-gradient(135deg, #4c4c4c 0%,#131313 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313',GradientType=1 )",
        "fontSize": 30,
        "WebkitBoxShadow": "0px 0px 10px 0px rgba(0,0,0,0.75)",
        "MozBoxShadow": "0px 0px 10px 0px rgba(0,0,0,0.75)",
        "boxShadow": "0px 0px 10px 0px rgba(0,0,0,0.75)",
        "textAlign": "center",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
    }
});