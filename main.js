var person = {
  name: 'hector',
  lastName: 'zarco garcia'
};
var person2 = {
  name: 'X',
  lastName: 'zarco garcia'
};
var arr = [{
    name: 'hector',
    lastName: 'zarco garcia',
    position: 1
  }, {
    name: 'hector',
    lastName: 'zarco garcia',
    position: 3
  }, {
    name: 'Miau',
    lastName: 'so so',
    position: 2
  }, {
    name: 'Miau',
    lastName: 'soo',
    position: 0
  },
  1
];

var arr2 = ['a', 'b', 'c', 1, 2];

var filter = {
  name: 'Miau'
};

var arrWithMethods = [{
  getName: function() {
    return 'hector'
  }
}, {
  getName: function() {
    return 'Paco'
  }
}];

// console.log(arrWithMethods.mapByMethod('getName'));
// console.log(arr.where(filter));
// console.log(arr.findWhere(filter));
// console.log(arr.findBy('name', 'hector'));
// console.log(arr.filterBy('lastName', 'beep'));
// console.log(arr2.contains(1));
// console.log(arr.contains(1));
// console.log(arr.sortBy('position'));
// console.log(arr.mapBy('position'));
// console.log(person.keys());
// console.log(person.values());