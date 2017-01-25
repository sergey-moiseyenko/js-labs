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

  class Rectangle extends Shape{

    get name() {
      return 'Rectangle';
    }

    draw() {
      super.draw();
    }
  }

  class Ellipse extends Shape{

    get name() {
      return 'Ellipse';
    }

    draw() {
      super.draw();
    }
  }

  let rectangle = new Rectangle(1, 2, 3, 4);
  rectangle.draw();

  let ellipse = new Ellipse(100, 200, 300, 400);
  ellipse.draw();

}();
