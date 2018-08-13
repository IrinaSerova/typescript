var Planet = /** @class */ (function () {
    function Planet(width, color) {
        this.width = width;
        this.color = color;
    }
    Planet.prototype.info = function () {
        return "Science fact. This planet has width " + this.width + " and color " + this.color;
    };
    return Planet;
}());
var mercury = new Planet(3032, 'dark gray');
var venus = new Planet(7520, 'yellowish white');
var earth = new Planet(7917, 'blue');
console.log("The planet Mercury has width " + mercury.width + " and color " + mercury.color);
console.log("The planet Venus has width " + venus.width + " and color " + venus.color);
console.log("The planet Earth has width " + earth.width + " and color " + earth.color);
console.log(mercury.info());
