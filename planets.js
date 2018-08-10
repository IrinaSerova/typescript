var Planet = /** @class */ (function () {
    function Planet(width, color) {
        this.width = width;
        this.color = color;
    }
    return Planet;
}());
var sun = new Planet(864, 'yellow');
// console.log(`The planet ${sun} has width ${Sun.width} and ${Sun.color}`);
console.log(sun.color);
