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
}();
