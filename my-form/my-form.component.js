'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('myForm').
  component('myForm', {
    templateUrl: 'my-form/my-form.template.html',
    controller: function culc() {
      var self = this;
      var amount = 0;
      self.persons = [
          {name: "A",  position: "S", soft: 3.0, hard: 5},
          {name: "B",  position: "A", soft: 2.5, hard: 4},
          {name: "C",  position: "A", soft: 2.5, hard: 4},
          {name: "D",  position: "D", soft: 1.0, hard: 1}
      ];
      self.soft_total = 0.0;
      self.hard_total = 0.0;
      for (var person in self.persons) {
          self.soft_total += self.persons[person].soft;
          self.hard_total += self.persons[person].hard;
      }
    }
  });
