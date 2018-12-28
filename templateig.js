// ok so something new

//if you have ur log message b/w `` these, and add js code to ${JS CODE HERE},
//it displays the run CODE
//pretty cool

/**
* @author @zrthxn
* those are called `template strings`
* generally pretty useful but might have some pitfalls like
* if you have a variable in which data from some user input is coming
* and you use `data=${userinput}`
* this is vulnerable to injection like SQLi
*/

console.log(`Ok so this message has a js code ${console.log("...UWU..HI I AM THE JS CODE..UWU...")}<-- here`);
// the problem here is that you're trying to put a statement where it's expecting a variable
// do this
let js_message = "...UWU..HI I AM THE JS CODE..UWU...";
console.log(`Ok so this message has a js code ${js_message}<-- here`);

// the thing you were trying is like.. not valid.. but POSSIBLE
// there's this function called eval()
// it will execute any string that you give it... like the string can be a whole program
// so like
let a = "console.log(a)";
let b = "console.log(b)";
let c = "console.log(c)";
//now those are strings...how do you EXECUTE a STRING?
// by eval()
eval(a); // prints "a"
eval(b); // prints "b"
eval(c); // prints "c"
