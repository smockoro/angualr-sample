'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('myInput').
  component('myInput', {
    templateUrl: 'my-input/my-input.template.html',
    controller: function PhoneListController() {
      var self = this;
      self.juwels = [
          {name: "Emerald",  price: 750, age: 1},
          {name: "Amephyst", price: 300, age: 2},
          {name: "Topaz",    price: 250, age: 3},
          {name: "Saffia",   price: 600, age: 4},
          {name: "Parl",     price:  50, age: 5},
          {name: "Ruby",     price: 100, age: 6},
          {name: "Diamond",  price: 900, age: 7}
      ];
    }
  });
