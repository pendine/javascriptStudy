const name = "큰돌"
const s = `솔직히 알수록 ${name}은 바보인 것 같아`;

console.log(s);

const person = { "age" : 21, "name" : "큰돌"}
const tag1_1 = "<p>나의 나이는" + person.age + "입니다.</p>"
const tag1_2 = "<p>" + person.name + "님 환영합니다</p>"
console.log(tag1_1,tag1_2);

const tag2_1 = `<p>나의 나이는 ${person.age} 입니다.</p>`
const tag2_2 = `<p>${person.name} 님 환영합니다</p>`
console.log(tag2_1,tag2_2);