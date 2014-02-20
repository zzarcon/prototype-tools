var person = {
  name: 'hector',
  lastName: 'zarco garcia'
};
var person2 = {
  name: 'X',
  lastName: 'zarco garcia'
};
var arr = [1, {
  name: 'hector',
  lastName: 'zarco garcia'
}, {
  name: 'hector',
  lastName: 'zarco garcia'
}, {
  name: 'anna',
  lastName: 'mateu belda'
}, {
  name: 'anna',
  lastName: 'beep'
}];

var arr2 = ['a', 'b', 'c', 1, 2];

var filter = {
  name: 'anna'
};

// console.log(arr.where(filter));
// console.log(arr.findWhere(filter));
// console.log(arr.findBy('name', 'hector'));
// console.log(arr.filterBy('lastName', 'beep'));
// console.log(arr2.contains(1));
console.log(arr.contains(1));