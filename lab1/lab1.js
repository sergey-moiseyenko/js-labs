;!function () {
  'use strict';

  function Shape(name) {
    this.name = name;

    this.getName = function () {
      return this.name;
    };

    this.draw = function () {
      alert(formatName());
    };

    var formatName = function () {
      return this.name + " with bind ";
    }.bind(this);
  }

  var shape = new Shape("Shape");
  shape.draw();

}();
