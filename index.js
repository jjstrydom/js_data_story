var svg = document.getElementsByTagName('svg')[0]; //Get svg element

const rand_circle_config = {
    radius_min: 10,
    radius_max: 15,
    color: {
        base_hue: 193,
        base_saturation: 81,
        base_lightness: 62,
        base_alpha: 50,
        range_hue: 10,
        range_saturation: 10,
        range_lightness: 10,
        range_alpha: 10,
    }
};

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generateRandomFromColor(config) {
    var hue = getRandomInteger(config["base_hue"]-config["range_hue"]/2, config["base_hue"]+config["range_hue"]/2);
    var saturation = getRandomInteger(config["base_saturation"]-config["range_saturation"]/2, config["base_saturation"]+config["range_saturation"]/2);
    var lightness = getRandomInteger(config["base_lightness"]-config["range_lightness"]/2, config["base_lightness"]+config["range_lightness"]/2);
    var alpha = getRandomInteger(config["base_alpha"]-config["range_alpha"]/2, config["base_alpha"]+config["range_alpha"]/2);
    color = "hsla(" + hue + ", " + saturation + "%, " + lightness + "%, " + alpha + "%)";
    return color;
}

function drawCircle(document, x, y, r, color) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", color);
    circle.setAttribute("stroke-width", "0");
    svg.appendChild(circle);
    return circle
}

function drawCircleRandomLocation(document, config) {
    var x = Math.floor(Math.random() * (svg.clientWidth));
    var y = Math.floor(Math.random() * (svg.clientHeight));
    var r = Math.floor(Math.random() * (config["radius_max"] - config["radius_min"])) + config["radius_min"];
    var color = generateRandomFromColor(config["color"])
    var circle = drawCircle(document, x, y, r, color);
    return circle
}

var x = svg.clientWidth/2
var y = svg.clientHeight/2
var r = 10
var color = "#999999"

drawCircle(document, x, y, r, color)

for (let i = 0; i < 200; i++) {
    drawCircleRandomLocation(document, rand_circle_config)
}