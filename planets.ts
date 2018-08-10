class Planet {
    constructor(width, color){
        this.width = width;
        this.color = color;
    }
}
let sun = new Planet(864337, 'yellow');
let mercury = new Planet(3032, 'dark gray');
let venus = new Planet(7520, 'yellowish white');

console.log(`The planet Sun has width ${sun.width} and color ${sun.color}`);
console.log(`The planet Mercury has width ${mercury.width} and color ${mercury.color}`);
console.log(`The planet Sun has width ${venus.width} and color ${venus.color}`);
// console.log(sun.color);
