var fs = require('fs');

var str1 = fs.readFileSync("data.txt");
console.log(str1);

function change(str){

    var org_str = str.toString();
    var str = org_str.replace( /[aeiou]/ig, '' );
    console.log(str);
    return str;
}

// change(str1);
var result = change(str1);
fs.writeFileSync("result.txt",result.toString());
console.log(result);



// console.log(str);