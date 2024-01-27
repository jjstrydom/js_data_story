var svg = document.getElementsByTagName('svg')[0]; //Get svg element

function drawCircle(document) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttribute("cx", "0");
    circle.setAttribute("cy", "0");
    circle.setAttribute("r", "90");
    circle.setAttribute("fill", "#f0f0c9");
    circle.setAttribute("stroke", "#00000011");
    circle.setAttribute("stroke-width", "10");
    svg.appendChild(circle);
    return circle
}

drawCircle(document)