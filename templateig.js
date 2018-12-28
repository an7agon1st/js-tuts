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
