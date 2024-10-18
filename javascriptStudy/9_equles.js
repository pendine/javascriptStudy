var str = new String('test');
console.log(" str == 'test' ")
if(str == 'test'){
    console.log(true);
}
else{
    console.log(false);
}
console.log("---------------------");
console.log(" str === 'test' ")
var str = new String('test');
if(str === 'test'){
    console.log(true);
}
else{
    console.log(false);
}

console.log("---------------------");
console.log(" str === str2 ")
var str = new String('test');
// var str2 = new String('test');
var str2 = str;
if(str === str2){
    console.log(true);
}
else{
    console.log(false);
}
console.log(str, str2);
str = 'test2';
console.log(str, str2);

