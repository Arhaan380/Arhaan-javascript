const accountId = 99910
let accountName = "Arhaan"
var accountCity = "New Delhi"
let accountBranch;
//we can initialise a variable by using let and var keyword which gives 'undefined' as a result

console.log(accountCity, accountId, accountName);
console.log(accountBranch);


//By using console.table() we can print out output in a tabular form
console.table([accountBranch, accountCity, accountId, accountName]);

accountOffice = "Karol Bagh"; //Can declar a variable wothout any let, const, var keyword
console.log(accountOffice);