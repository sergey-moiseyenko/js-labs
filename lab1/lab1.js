;!function () {
  'use strict';

  var shape = new Shape(5, 10, 15, 20);
  shape.draw();

  function Shape (x, y, width, height) {

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.getName = function () {
      return 'Shape';
    };

    this.draw = function () {
      console.log(this.getName());
      console.log('x: ' + this.x + ', y: ' + this.y + ', width: ' + this.width + ', height: ' + this.height);
    };
  }

  function Rectangle(x, y, width, height) {
    Shape.call(this, x, y, width, height);

    this.getName = function () {
      return "Rectangle";
    };

    var parentDraw = this.draw;
    this.draw = function () {
      parentDraw.call(this);
    }
  }

  var rectangle = new Rectangle(50, 100, 150, 200);
  rectangle.draw();

  function Ellipse(x, y, width, height) {
    Shape.call(this, x, y, width,  height);

    this.getName = function () {
      return "Ellipse";
    };

    var parentDraw = this.draw;
    this.draw = function () {
      parentDraw.call(this);
    }
  }

  var ellipse = new Ellipse(50, 100, 150, 200);
  ellipse.draw();

}();
