;!function () {

  'use strict';

  class Shape {

    constructor(x, y, width, height){
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    get name() { return 'Shape'; }

    draw() {
      console.log(this.name);
      console.log(this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height);
    }
  }

  let shape = new Shape(100, 200, 300, 400);
  shape.draw();

}();
