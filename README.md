Prototype tools
===================
This lib is a set of utilities for Arrays and Objects that implement useful and comon functions in the native prototypes

### Array methods

  -where
  -contains
  -mapBy
  -findWhere
  -findBy
  -filterBy
  -sortBy

  Given the following array:

  ```javascript
    var arr = [
    1,
    "a",
    {
      name: 'hector',
      lastName: 'zarco garcia',
      position: 1
    }, {
      name: 'hector',
      lastName: 'zarco garcia',
      position: 3
    }, {
      name: 'hector',
      lastName: 'leon',
      position: 2
    }, {

  ```
#### where
  Return an array with all objects that accomplish the condition:

  ```javascript
    arr.where({name: 'hector'});
    //Return
    [{
      name: 'hector',
      lastName: 'zarco garcia',
      position: 1
    }, {
      name: 'hector',
      lastName: 'zarco garcia',
      position: 3
    }]
  ```
#### contains
  Return true if the collection contain the passed item:
  ```javascript
    arr.contains(1);
    //Return true
    arr.contains("a");
    //Return true
    arr.contains({
      name: 'hector',
      lastName: 'zarco garcia',
      position: 1
    });
    //Return true
  ```
  Notice that return true if the value of the object matches, not the reference.
#### mapBy
  Return an array with all values of the passed property:
  ```javascript
    arr.mapBy('position');
    //Return [undefined,undefined,1,3,2]
  ```
#### findWhere
  Equal than `where` but return only the first ocurrence:
  ```javascript
    arr.where({name: 'hector'});
    //Return
    {
      name: 'hector',
      lastName: 'zarco garcia',
      position: 1
    }
  ```
#### findBy

  ```javascript
    arr.where({name: 'hector'});
    //Return
    [{
      name: 'hector',
      lastName: 'zarco garcia',
      position: 1
    }, {
      name: 'hector',
      lastName: 'zarco garcia',
      position: 3
    }]
  ```
#### filterBy

  ```javascript
    arr.where({name: 'hector'});
    //Return
    [{
      name: 'hector',
      lastName: 'zarco garcia',
      position: 1
    }, {
      name: 'hector',
      lastName: 'zarco garcia',
      position: 3
    }]
  ```
#### sortBy

  ```javascript
    arr.where({name: 'hector'});
    //Return
    [{
      name: 'hector',
      lastName: 'zarco garcia',
      position: 1
    }, {
      name: 'hector',
      lastName: 'zarco garcia',
      position: 3
    }]
  ```


### Object methods
  -keys
  -values