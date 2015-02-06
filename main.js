var fizz = 0;
var buzz = 0;
var fb = 0;

function fizzBuzz() {

  for (var number = 1; number <= 100; number++) {

    if(number % 3 === 0 && number % 5 === 0)  {
      console.log("FizzBuzz")
      fb++;
    } 
    else if (number % 5 === 0) {
      console.log("Buzz");
      buzz++;
    } 
    else if (number % 3 === 0) {
      console.log("Fizz");
      fizz++;
    } 
    else {
      console.log(number);
    }
    console.log("Fizz" + fizz);
    console.log("Buzz" + buzz);
    console.log("FizzBuzz" + fb);
  }
