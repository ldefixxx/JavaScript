let shopping = "   Apfel, Pfirsich, +++Avocado, Mango   ";

//replace some content with another.
let  a = shopping.replace( "   ", "").replace("+++", "");

console.log(shopping.length);

//schneidet alles von 2-38 aus und replaced zusätzlich die "+++" mit "".
let  x = shopping.slice(2,38).replace("+++", "");
console.log(x);

