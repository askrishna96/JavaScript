// your notes here!
console.log("hello world!");

var s= 'Sai_krishna';
var S= s.slice(3,5);
var x= s.length;
console.log(S);
console.log(x);

var ranks = ['two','three','four','five','six','seven','eight','nine','ten','jack','queen','king','ace'];
console.log(ranks.indexOf('sai'));


var S=suit.toLowerCase();
var R=rank.toLowerCase();
if (S==='diamonds' || S==='hearts' || S==='spades' || S==='clubs')
{
  if (R==='two' ||R==='three'||R==='four' ||R==='five' ||R==='six'
   ||R==='seven' ||R==='eight' ||R==='nine' ||R==='ten' ||R==='jack'||R==='queen' ||R==='king' ||R==='ace')
   {
  return true;
}
else {
  return false;
}
}
