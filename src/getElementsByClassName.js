// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // Declare ouput as an array
  var output = [];

  // Create an inner function, test()
  // Note: this is a helper function (not closure)
  var test = function(node) {
    // Base case: check the current node, to see if it contains the className
    // Use underscore library's method, _.contain
    
    // if (_(node.classList).contains(className)) {
    //   output.push(node);  // push to results
    // }
    // The detailed version, without the library
    if (node.classList) {
      for (var i = 0; i < node.classList.length; i++) {
        if (node.classList[i] === className) {
          output.push(node);
        }
      }
    }
    // check if current node has child nodes
    // for each child node
    node.childNodes.forEach(function(child) {
      //output.concat(test(child));
      test(child);
    });
    
    // call test on each child node
    // Look for the next node, and apply recursion of function test()
    
  };
  // call test
  test(document.body);  
  // document.body is the default source
  return output;
};


