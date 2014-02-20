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
  ArrayProto.where = function() {
    return T.filter.apply(this, arguments);
  };

  ArrayProto.findWhere = function() {
    return T.filter.apply(this, arguments)[0];
  };

  ArrayProto.findBy = function(key, value) {
    var attrs = {};
    attrs[key] = value;
    return T.filter.call(this, attrs)[0];
  };

  ArrayProto.filterBy = function(key, value) {
    var attrs = {};
    attrs[key] = value;
    return T.filter.call(this, attrs);
  };

  ArrayProto.contains = function(value) {
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
  };

}).call(this);