

// let handelar = function(user, age){
//     console.log(`hello world ${user} your age is ${age}`);
// };

// setTimeout(handelar,2000,"fouad", 24);





// let timer = setTimeout (function(){
//     console.log(`hello world again`);
// },3000);



// let btn = document.querySelector("button");

// btn.onclick = function(){
//     console.log(`clicked`)
//     clearTimeout(timer);
// }

// let intervalCount = setInterval(function(){
//     console.log(`hello fouad`);
// },3000);

// btn.onclick = function(){
//     clearInterval(intervalCount);
// }

// let div = document.querySelector("div");


// let countDown = setInterval(() => {
//     div.innerHTML -=1;
//     if(div.innerHTML === "0"){
//         clearInterval(countDown);
//     }
// }, 1000);


// window.scrollBy({
//     left:1500,
//     top: 1200,
//     behavior: "smooth",
// });

// let btn = document.querySelector("button");

// window.onscroll = function(){
//     if (window.scrollY >= 600){
//         btn.style.display = "block";
//     }else{
//         btn.style.display = "none";
//     };
// };
// btn.onclick = function(){
//     window.scrollTo({
//         top:0,
//         left:0,
//         behavior:"smooth",
//     });
// };


// let frinds = ["ahmed", "sayed", "ali", ["shady", "amr", ["mohamed", "gmal"]]];


// let [, , , [a, , [, b]]] = frinds;


// console.log(a);   // shady
// console.log(b);   // gaml

// let user = {
//     theName:"fouad",
//     theAge: 24,
//     theTitle: "develober",
//     theContery: "egypt",
//     skills: {
//         html: 70,
//         css: 11,
//     },
// };

// showDetails(user);

// function showDetails (obj){
//     console.log(`your name is ${obj.theName}`);
//     console.log(`your age is ${obj.theAge}`);
//     console.log(`your css skill is ${obj.skills.css}`);
// }

// function showDetails ({theName, theAge, skills: {css}} = user ){
//     console.log(`your name is ${theName}`);
//     console.log(`your age is ${theAge}`);
//     console.log(`your css skill is ${css}`);
// }


// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theContery = user.theContery;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theContery);

// let {theName: a, theAge: ag, theTitle: ti, theContery, theColor: c = "red", skills:{html: h, css}} = user;

// console.log(a);
// console.log(ag);
// console.log(ti);
// console.log(theContery);
// console.log(c);
// console.log(`my html skill is ${h}`);
// console.log(`my css skill is ${css}`);


// const {html: skillOne, css: skillTwo} = user.skills;



// let user = {
//     theName: "fouad",
//     theAge: 24,
//     skills: ["html", "css", "js"],
//     addreses: {
//         egypt: "cairo",
//         ksa: "reyadh",
//     },
// };

// const {theName: n, theAge: a, skills : [, , three], addreses :{egypt: g}} = user;


// console.log(`your name is ${n}`);
// console.log(`your age is ${a}`);
// console.log(`your skills is [${three}]`);
// console.log(`your address is ${g}`);


// let myData = [1,1,1,2,3,3];

// // let newData = new Set([1,1,1,2,3,3]);

// let newData =new Set ();
// newData.add(1).add(1).add(1);
// newData.add(2).add(3).add("A");

// // console.log(newData.delete(2));
// // newData.clear();

// console.log(newData);
// console.log(newData.size);

// console.log(newData.has("A"));


// console.log(typeof new Set());

// let data = new Set ([1,1,1,2,3,"A"]);

// console.log(data);
// console.log(data.size);

// let iterator = data.keys();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// data.forEach((ele) => console.log(ele));

// let myWs = new WeakSet ([{a:1 , b:2}]);

// myWs.add({c:3 , d:4});

// console.log(myWs);

// console.log(myWs.siz);

// let myObj = {};
// let myEmptyObj = Object.create(null);
// let myMap = new Map();

// console.log(myObj);
// console.log(myEmptyObj);
// console.log(myMap);

// let myNewObj = {
//     10: "number",
//     "10": "string",
// };

// console.log(myNewObj[10]);

// let myNewMap = new Map();

// myNewMap.set(10,"number");
// myNewMap.set("10","string");
// myNewMap.set(true,"boolean");
// myNewMap.set({Object},"object");
// myNewMap.set({a:1 , b:2},"object");
// myNewMap.set(function doSomething(){} ,"function");

// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));

// console.log("*".repeat(10));

// console.log(myNewObj);
// console.log(myNewMap);

// let myMap = new Map([
//     [10, "number"],
//     ["name", "string"],
//     [false, "boolean"]
// ]);

// myMap.set(10, "number");
// myMap.set("name", "string");

// console.log(myMap);
// console.log(myMap.get(10));
// console.log(myMap.get("name"));
// console.log(myMap.get(false));

// console.log(myMap.size);

// // myMap.clear();
// // myMap.delete("name");
// console.log(myMap);
// console.log(myMap.size);
// console.log(myMap.has("Name"));


// console.log(Array.from("fouad"));
// console.log(Array.from("fouad").length);
// console.log(Array.from("fouad".toUpperCase()));
// console.log(Array.from("12345",function(n){
//     return +n + +n;
// }));

// let myArray = [1,1,1,2,3];

// let mySet = new Set(myArray);

// console.log(Array.from(mySet));

// let myArray = [10, 20, 30, 40, 50, "a", "b"];

// myArray.copyWithin(4 ,6);
// myArray.copyWithin(-3,-1);

// myArray.copyWithin(1,5);
// myArray.copyWithin(-6,-2);
// myArray.copyWithin(1,5,6);
// myArray.copyWithin(1,-2,-1);
// myArray.copyWithin(-6,-2,-1);

// console.log(myArray);

// let nums = [1, 2, 3, 4, 5, 6, 7];

// let check = nums.some(function(e){
//     console.log("test");
//     return e > 5;
// });

// console.log(check);

// function checkValue(arr, val){
//     return arr.some(function(e){
//         return e === val;
//     });
// };

// console.log(checkValue(nums, 10));

// let array1 = [1,2,3];
// let array2 = [4,5,6];

// let allArrays = [...array1, ...array2];


// console.log(allArrays);


// let myName = "Fouad mohamed fouad ahmed mohamed";

// let regEx = /fouad/ig;

// console.log(myName.match(regEx));

// let tld = " com org io net info dom";

// let tldRx = /(org|io|info)/ig;

// console.log(tld.match(tldRx));

// let nums = "12345678910";

// let numsRg = /[0-2]/g;

// console.log(nums.match(numsRg));


// let notNums = "12345678910";

// let notNumsRg = /[^0-2]/g;

// console.log(notNums.match(notNumsRg));




// let spechial = "1!2!3!4!5!6!7!8!9!1!0!";

// let notSpechial = /[^!]/g;

// console.log(spechial.match(notSpechial));


// let practic = "os1 os1os os2 os8 os8os";

// let practicrg = /os[5-9]os/g;

// console.log(practic.match(practicrg));

let myString = "fouad mohamed fouad ahmed";

let name = "i love you very much";

console.log(/ed$/ig.test(myString));
console.log(/ch$/ig.test(name));
