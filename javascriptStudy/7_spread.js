let 구분 = `----------------------------`;
const name = "종선"
const age = "27"
const job = "회장"
const data_used_ES6 = {name, age, job}
const data_not_used_ES6 = {"name":name, "age":age, "job":job}

console.log(data_used_ES6)
console.log(data_not_used_ES6)
console.log(구분);
//--------------------------------------
const a = (b , ...rest) =>{
    console.log(rest)
}
console.log( a(1,2,3) )

const b = [1,2,3]
const a2 = (a,b,c) => console.log(a,b,c)
console.log( a2(...b) )

const a3 = [1,2,3,4,5]
const [head, ...rest] = a3
console.log(head, rest)
console.log(구분);
//------------------------------
const array1 = [1,2,3]
const array2 = [4,5,6]

// const arrayAll = [array1,array2]
const arrayAll = [...array1,...array2]
console.log(arrayAll)
console.log(구분);
//-------------------------------
const arr = [1,2,3,4]
let result = Math.max(...arr);
// let result = Math.max(arr); // NaN
console.log(result);
console.log(구분);
//------------------------
const object = {"name":"주홍철", "age":27}
const object2 = {...object, "key":1}
console.log(object)
console.log(object2)
console.log(구분);
//-------------------------
let swap1 = 1;
let swap2 = 2;
[swap1, swap2] = [swap2, swap1];
console.log(swap1, swap2);
console.log(구분);
//--------------------------
const ad= () => [1,2,3,4];
const [aa,ab,ac] = ad();
console.log(aa,ab,ac);
console.log(구분);
//----------------------------
let 시작 = e => `${구분} ${e} 시작 ${구분}`
let 종료 = e => `${구분} ${e} 종료 ${구분}`
console.log(시작('객체에 밸류 쉽게 담기'));
const dd = () => { return {"dname": "최주원" , "job" : "마케터"} } 
const {dname} = dd();
console.log(dname);

const aa2 = [1,2];
const [bb,cc] = aa2;
console.log(bb,cc);

const aa3 = {"aaname":"큰돌" ,"노래":"자취방좋아"};
const {aaname,노래} = aa3;
console.log(aaname, 노래);
console.log(종료('객체에 밸류 쉽게 담기'));