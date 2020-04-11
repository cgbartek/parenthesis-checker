// Assignment 4: Write a program (in Java or JavaScript) which takes in a string as an input
// and returns true if all the parentheses in the string are properly closed and nested.

// I assume the intention isn't to check actual LISP code with brackets, braces, etc.
// so this function just concentrates on parenthesis per instructions.
// ES5 used for simplicity's sake.

/**
 * Check for balanced parenthesis
 * by Chris Bartek
 * @param {String} str
 * @param {Number} interval
 * @return {Boolean} true / false
 */
function checkParenthesis(str) {
  console.log('Test Start.');
  var error = false; // flag if error found
  var code = str.split(''); //str to arr
  var openCnt = 0; // track total open parenthesis
  var openCurr = 0; // track currently open parenthesis
  var closeCnt = 0; // track total close parenthesis

  code.forEach(function(v,i) {
    switch (v) {
    case '(':
      openCnt++;
      openCurr++;
      break;
    case ')':
      closeCnt++;
      openCurr--;
    }

    if(openCnt < 0 || openCurr < 0) {
      error = true;
    }
  });

  if(openCnt != closeCnt) {
    console.log('Error: Bracket mismatch.');
    return false;
  } else {
    if(!error) {
      console.log('Test OK.');
      return true;
    } else {
      console.log('Error: Too many closing brackets.');
      return false;
    }
  }
}


// Tests. Everything I can think of checks out.
checkParenthesis('this is a test!'); // OK
checkParenthesis('this (is) a test!'); // OK
checkParenthesis('this (is) ( a ( test ) ) !'); // OK
checkParenthesis('(this(is)(a(test))!)'); // OK
checkParenthesis('this(is)(a(te)st))!'); // FAIL
checkParenthesis('this(is)(a(te(st))!'); // FAIL
checkParenthesis('th((is(is)(a(test))!'); // FAIL
checkParenthesis('(((this )()) is a test!'); // FAIL
checkParenthesis('this ) is a test!'); // FAIL
checkParenthesis('this )( is a test!'); // FAIL
