var Planet = /** @class */ (function () {
    function Planet(width, color) {
        this.width = width;
        this.color = color;
    }
    return Planet;
}());
var sun = new Planet(864337, 'yellow');
var mercury = new Planet(3032, 'dark gray');
var venus = new Planet(7520, 'yellowish white');
console.log("The planet Sun has width " + sun.width + " and color " + sun.color);
console.log("The planet Mercury has width " + mercury.width + " and color " + mercury.color);
console.log("The planet Sun has width " + venus.width + " and color " + venus.color);
// console.log(sun.color);
