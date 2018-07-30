// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// inputs: various types, strings, booleans, numbers, null, objects, arrays
// output: stringified version of the input
var stringifyJSON = function(obj) {
  // your code goes here
  // results empty string to store stringified results
  var results = '';
  // check if its a number, null, or boolean
  if ( typeof obj === 'number' || typeof obj === 'boolean' || obj === null ){
    return '' + obj;
  } else if ( typeof obj === 'string' ){
    return '"' + obj + '"';
  } else if ( Array.isArray(obj) ){
    return '[' + _.reduce(obj, function(acc, value, key){
      return [...acc, stringifyJSON(value)];
    }, []).join(',') + ']';
  } else if ( typeof obj === 'object') {
    return '{' + _.reduce(obj, function(acc, value, key){
      // 1 additional check, for object type (for corner cases left)
      if (obj[key] === undefined || typeof obj[key] === 'function'){
        return acc;
      } else {
        return [...acc, stringifyJSON(key) + ':' + stringifyJSON(obj[key])];
      }
    }, []).join(',') + '}';
  }
};

// Test the outputs
var input = {};
console.log(stringifyJSON(input));
