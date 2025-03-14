let jsonString = '{"name":"Alice","age":25}';
let obj = JSON.parse(jsonString);
obj.country = "USA";
jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"Alice","age":25,"country":"USA"}
