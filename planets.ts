class Planet {
    constructor(width, color){
        this.width = width;
        this.color = color;
    }
}
let Sun = new Planet(864, yellow);
console.log(`The planet ${Sun} has width ${Sun.width} and ${Sun.color}`);