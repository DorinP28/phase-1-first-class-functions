function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction() {
    return function myFunction() {
      console.log("This is myFunction");
    };
  }
  

function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    };
}
