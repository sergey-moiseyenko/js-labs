;!function() {

  'use strict';

  function Shape(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.getName = function () {
      return "Shape";
    };

    this.draw = function () {
      console.log(this.getName());
      console.log(x, y, width, height);
    }
  }

  var shape = new Shape(100, 200, 300, 400);
  shape.draw();

}();