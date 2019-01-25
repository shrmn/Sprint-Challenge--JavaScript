// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(cmAttrs){
  this.length = cmAttrs.length;
  this.width = cmAttrs.width;
  this.height = cmAttrs.height;
  }

  volume() {
    return this.length*this.width*this.height;
  }
  
  surfaceArea() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// Volume of the cube = l × l × l = l³
// Surface of the cute = 6 * (a*a)

class CubeMaker extends CuboidMaker {
  constructor(cubeAttrs) {
    super(cubeAttrs);
    this.length = cubeAttrs.length;
    this.width = this.length;
    this.height = this.length;
  }

  volume() {
    return this.length * this.length * this.length;
  }

  surface() {
    return 6 * (this.length * this.length);
  }
}

const qbert = new CubeMaker({
  length: 5
})

console.log(qbert.volume());
console.log(qbert.surface());