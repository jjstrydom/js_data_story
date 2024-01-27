var svg = document.getElementsByTagName('svg')[0]; //Get svg element

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

function drawCircleRandomLocation(document, color) {
    var x = Math.floor(Math.random() * (svg.clientWidth - 100)) + 50;
    var y = Math.floor(Math.random() * (svg.clientHeight - 100)) + 50;
    var r = Math.floor(Math.random() * (50 - 10)) + 10;
    var color = "#f0f0c9"
    var circle = drawCircle(document, x, y, r, color);
    return circle
}

var x = "0"
var y = "0"
var r = "10"
var color = "#f0f0c9"

drawCircle(document, x, y, r, color)
drawCircleRandomLocation(document)