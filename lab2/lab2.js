;!function() {

  'use strict';

  function Shape(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  Shape.prototype.getName = function () {
    return "Shape";
  };

  Shape.prototype.draw = function() {
    console.log(this.getName());
    console.log(this.x, this.y, this.width, this.height);
  };

  /* Rectangle */
  function Rectangle(x, y, width, height) {
    Shape.apply(this, arguments);
  }

  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;

  Rectangle.prototype.getName = function () {
    return "Rectangle"
  };

  /* Ellipse */
  function Ellipse(x, y, width, height) {
    Shape.apply(this, arguments);
  }

  Ellipse.prototype = Object.create(Shape.prototype);
  Ellipse.prototype.constructor = Ellipse;

  Ellipse.prototype.getName = function () {
    return "Ellipse";
  };

  var rectangle = new Rectangle(100, 200, 300, 400);
  rectangle.getName();
  rectangle.draw();

  var ellipse = new Ellipse(1000, 2000, 3000, 4000);
  ellipse.getName();
  ellipse.draw();

  var shapes = [
    new Rectangle(90, 200, 300, 100),
    new Rectangle(91, 200, 300, 200),
    new Ellipse(92, 200, 300, 300),
    new Ellipse(93, 200, 300, 400)
  ];

  for (var i = 0; i < shapes.length; i++) {
    shapes[i].draw();
  }

}();