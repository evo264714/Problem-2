//Find out the word "Evo" in given paragraph, find out how many times its been used and in what position it was found.

const sentence = "There was a person named Evo who is currently a student and learning web development skills\
 and techniques. Evo is 22 years old. Evo is very passionate about music and sports. Evo likes to travel as well\
 Evo is currently studying in United International University. Evo is studying Computer Science and Engineering."

 const matches = sentence.match (/Evo/gi);
 const occurances = matches ? matches.length : 0;

 console.log(occurances);

 let position = sentence.search(/Evo/i);
 position = position >= 0 ? position : "not found!";

 console.log(position);

 //input : linearsearch (['a', 'b', 'c', 'd', 'c'], 'c')
 //output: 2 or "not found!"
 //problem: Implement and show linearsearch() function.

 function linearsearch(arr, val){
    const length = arr.length;

    for(let i = 0; i < length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return "not found";
 }

 console.log(linearsearch(['a', 'b', 'c', 'd', 'c'], 'c'));

 //in between 1-100 find out the numbers that are divideable by 3 or 5 and the numbers 3 and 5 both.

 function fizzBuzz(number){
    for(let i = 1; i <= number; i++){
        if(i % 15 === 0){
            console.log (`${i} is FizzBuzz`);
        } else if (i % 3 === 0){
            console.log(`${i} is Fizz`);
        } else if (i % 5 === 0){
            console.log(`${i} is Buzz`);
        } else {
            console.log(i);
        }
    }
 }
 fizzBuzz(100);

 // How to cut off falsy value from an array

 const mixedArr = ["Evo", "MHE", undefined, "orange", "40", false, "z", NaN, true, "apple"];

 const trueArray = mixedArr.filter(Boolean);

 console.log(trueArray);

 // How to cut off falsy value from an object? 

const obj = {
    a: "MHE",
    b: undefined,
    c: "Evo",
    d: false,
    e: "Apple",
    f: "",
    g: NaN,
    h: true,
    i:"Thank you"
};

const truthyObject = function(obj){
    for (let i in obj){
        if (!obj[i]){
            delete obj[i];
        }
    }

    return obj;
}

console.log(truthyObject(obj));


//Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);

//Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.

console.log('--------------------');
for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is on a Sunday  " + year);
    }
console.log('--------------------');

