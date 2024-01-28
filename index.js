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

function wrapNumber(value, min_value, max_value) {
    delta = max_value - min_value;
    if (value < min_value) {
        value = value + delta;
    }
    if (value > max_value) {
        value = value - delta;
    }
    return value;
}

function capNumber(value, min_value, max_value) {
    if (value < min_value) {
        value = min_value;
    }
    if (value > max_value) {
        value = max_value;
    }
    return value;
}

function generateRandomFromColor(config) {
    var hue = getRandomInteger(config["base_hue"]-config["range_hue"]/2, config["base_hue"]+config["range_hue"]/2);
    hue = wrapNumber(hue, 0, 360); //Wrap hue to 0-360 range
    var saturation = getRandomInteger(config["base_saturation"]-config["range_saturation"]/2, config["base_saturation"]+config["range_saturation"]/2);
    saturation = capNumber(saturation, 0, 100); //Cap saturation to 0-100 range
    var lightness = getRandomInteger(config["base_lightness"]-config["range_lightness"]/2, config["base_lightness"]+config["range_lightness"]/2);
    lightness = capNumber(lightness, 0, 100); //Cap lightness to 0-100 range
    var alpha = getRandomInteger(config["base_alpha"]-config["range_alpha"]/2, config["base_alpha"]+config["range_alpha"]/2);
    alpha = capNumber(alpha, 0, 100); //Cap alpha to 0-100 range
    
    color = "hsla(" + hue + ", " + saturation + "%, " + lightness + "%, " + alpha + "%)";
    return color;
}

function drawCircle(svg, x, y, r, color) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", color);
    circle.setAttribute("stroke-width", "0");
    svg.appendChild(circle);
    return circle;
}

function drawCircleRandomLocation(svg, config) {
    var x = getRandomInteger(0, svg.clientWidth);
    var y = getRandomInteger(0, svg.clientHeight);
    var r = getRandomInteger(config["radius_min"], config["radius_max"]);
    var color = generateRandomFromColor(config["color"])
    var circle = drawCircle(svg, x, y, r, color);
    return circle;
}

var x = svg.clientWidth/2;
var y = svg.clientHeight/2;
var r = 10;
var color = "#999999";

drawCircle(svg, x, y, r, color);

circle_list = [];
for (let i = 0; i < 200; i++) {
    c = drawCircleRandomLocation(svg, rand_circle_config);
    circle_list.push(c);
}
