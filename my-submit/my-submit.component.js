'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('mySubmit').
  component('mySubmit', {
    templateUrl: 'my-submit/my-submit.template.html',
    controller: function culc() {
      var self = this;
      var amount = 0;
      self.persons = [
          {id: 1, name: "いぬ",  position: "A", soft: 3.0, hard: 5, cancel: false},
          {id: 2, name: "さる",  position: "B", soft: 2.5, hard: 4, cancel: false},
          {id: 3, name: "きじ",  position: "B", soft: 2.5, hard: 4, cancel: false},
          {id: 4, name: "おに",  position: "E", soft: 1.0, hard: 1, cancel: false}
      ];

      self.cancel_persons = [];
      self.soft_total = 0.0;
      self.hard_total = 0.0;
      
      // 設定した傾斜値の合計を求める．傾斜地/合計で一人あたりの負担割合が出る．
      self.persons.forEach(function(person){
          self.soft_total += person.soft;
          self.hard_total += person.hard;
      });
      
      // チェックボックスにチェックが入れられた時の挙動を示す．
      // 傾斜地の合計値も修正している．
      self.checkIn = function(){
        self.persons.forEach(function(person){
            if (person.cancel) {
              self.cancel_persons.push(person);
              self.soft_total -= person.soft;
              self.hard_toral -= person.hard;
              self.persons.splice(self.persons.indexOf(person),1)
            }
        });
      }
      self.checkOut = function(){
        self.cancel_persons.forEach(function(person){
            if (!person.cancel) {
              self.persons.push(person);
              self.soft_total += person.soft;
              self.hard_toral += person.hard;
              self.cancel_persons.splice(self.cancel_persons.indexOf(person),1)
            }
        });
      }
    }
  });
