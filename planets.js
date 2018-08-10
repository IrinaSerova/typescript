var Planet = /** @class */ (function () {
    function Planet(width, color) {
        this.width = width;
        this.color = color;
    }
    return Planet;
}());
var Sun = new Planet(864, yellow);
console.log("The planet " + Sun + " has width " + Sun.width + " and " + Sun.color);
