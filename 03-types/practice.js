// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
var isDivisibleBy3 = function (num) {
  var val= num % 3;
  return val===0;
};
console.log(isDivisibleBy3(21));

// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.
var celsToFahr = function (num) {
  var val= ((num)*(9/5))+32;
  return val;
};
console.log(celsToFahr(33));
var fahrToCels = function (num) {
  var val= ((num)*(5/9))-32;
  return val;
};
console.log(fahrToCels(98));


// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236
var randUpTo = function (num) {
  var x = num;
  if (x <= 10)
  {
    var R=Math.random(x);
    R=R*10;
    var z=Math.floor(R);
    return z;
  }
  else if (x <= 1000 && x>=10)
  {
    var R=Math.random(x);
    R=R*1000;
    var z=Math.floor(R);
    return z;
  }
};
console.log(randUpTo(998));

// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.
var randBetween = function (a,b) {
  var z;
  z >= a && z <= b
  var R=Math.random(z);
  R=R*10;
  var z=Math.floor(R);
  return z;
};
console.log(randBetween(1,6));

// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
var isSuit = function (str) {
  var S= str.toLowerCase();
  return S=== 'diamonds' || S==='hearts' ||S==='spades' || S==='clubs';
};
console.log(isSuit("SpAdEs"));

// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false
var isRank = function (str) {
  var R=str.toLowerCase();
  var ranks = ['two','three','four','five','six','seven','eight','nine','ten','jack','queen','king','ace'];
  return ranks.indexOf(R)!==-1;
};
console.log(isRank('QUEEN'));


// Using the previous two functions, write a function called isCard that accepts
// two arguments, a rank and a suit, and returns true if they are valid for a card,
// and false otherwise.
var isCard = function (suit,rank) {
  var s = suit;
  var r = rank;
  if (isSuit(s) == true && isRank(r) == true)
  {
    return 'true';
  }
  else
  {
    return 'false';
  }
};
console.log(isCard('hearts','jack'));

// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. How can you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).
var isCapitalized = function (str) {
  var s = str.charAt(0);
  var m = s.toUpperCase();
  if (s === m)
  {
    return true;
  }
  else {
    return false;
  }
};
console.log(isCapitalized('Sita_Mahalakshmi'));


// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item
var getHTMLText = function (str) {
  var h = str.charAt(0);
  var l = str.length;
  var x = l-4;
  var H = str.charAt(l);
  if (h === '<' || H === '>')
  {
    var op = str.slice(3,x);
    return op;
  }
};
console.log(getHTMLText('<p>Krishna</p>'))

// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//
//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.
var isHTMLElement = function (str) {
  var f = str.charAt(0);
  var x = str.length;
  var y = x-1;
  var z=x-2;
  var l = str.charAt(y);
  if (f === '<' && l === '>')
  {
    if (str.charAt(1) === str.charAt(z))
    {
      var op = true;
    }
    else {
      var op = false;
    }
    return op;
  }
  else (f !== '<' && l !== '>')
  {
    throw "Missing required elements";
  }
};
console.log(isHTMLElement('<p>SAI_KRISHNA</p>'))
