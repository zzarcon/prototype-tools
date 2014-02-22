// Prototype tools
// https://github.com/zzarcon/prototype-tools
// (c) 2014 Hector Leon Zarco Garcia
// Prototype tools may be freely distributed under the MIT license.

(function() {

  var root = this;
  var T = {};

  var ArrayProto = root.Array.prototype;
  var ObjProto = root.Object.prototype;
  var FuncProto = root.Function.prototype;
  var stringify = JSON.stringify;

  T.filter = function(attrs) {
    var result = this;
    for (var prop in attrs) {
      result = result.filter(function(item) {
        return item[prop] === attrs[prop];
      });
    }
    return result;
  }

  //Apply Array functions
  Object.defineProperties(
    ArrayProto, {
      'where': {
        get: function() {
          return function() {
            return T.filter.apply(this, arguments);
          }
        }
      },
      'contains': {
        get: function() {
          return function(value) {
            var type = typeof value;

            if (type === "number" || type === "string") {
              return this.indexOf(value) !== -1;
            }
            //Trick for compare objects
            value = stringify(value);
            //Use some function instead of forEach for break the loop in a more elegant way
            return this.some(function(item) {
              return stringify(item) === value
            }) || false;
          }
        }
      },
      'mapBy': {
        get: function() {
          return function(property) {
            return this.map(function(item) {
              return item[property];
            });
          }
        }
      },
      'findWhere': {
        get: function() {
          return function() {
            return T.filter.apply(this, arguments)[0];
          }
        }
      },
      'findBy': {
        get: function() {
          return function(key, value) {
            var attrs = {};
            attrs[key] = value;
            return T.filter.call(this, attrs)[0];
          }
        }
      },
      'filterBy': {
        get: function() {
          return function(key, value) {
            var attrs = {};
            attrs[key] = value;
            return T.filter.call(this, attrs);
          }
        }
      },
      'sortBy': {
        get: function() {
          return function(property) {
            return this.sort(function(a, b) {
              if (a[property] > b[property]) {
                return 1;
              } else if (a[property] < b[property]) {
                return -1;
              }
              return 0;
            });
          };
        }
      }
    }
  );

  Object.defineProperties(
    ObjProto, {
      'keys': {
        get: function() {
          return function() {
            var keys = [];
            for (var prop in this) {
              keys.push(prop);
            }
            return keys;
          };
        }
      },
      'values': {
        get: function() {
          return function() {
            var values = [];
            for (var prop in this) {
              values.push(this[prop]);
            }
            return values;
          };
        }
      }
    }
  );

}).call(this);