//Callback functions
function receivesAFunction(spy) {
  spy();
}

//Function returning a named function
function returnsANamedFunction() {
  return function todayActivity() {};
}

//Function returning an anonymous function
function returnsAnAnonymousFunction() {
  return function () {};
}
