//Bill calculator
function myCalc(){
let bill,tip,total;

 bill = Number(document.getElementById("bill").value);

console.log(bill);
tip =  bill>=50.0 && bill<=300.0 ? (15/100)*bill : (20/100)*bill;
console.log(tip);
document.getElementById("tip").innerHTML = 'Tip:' + tip +'Rs';
total = bill + tip;
console.log(total);
document.getElementById("total").innerHTML = 'Total: ' + total +'Rs';
let myString =[bill,tip,total];
console.log(myString);
document.getElementById("wish").innerHTML ='🙂 "Thanks for visiting! Please visit again" 🙂';
}