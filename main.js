/*String Manipulation Functions: */

/*reverseString */

function reverseString(str){
let reverse=""
    for(let i= str.length-1 ; i>=0 ; i--){
        reverse+=str [i]
    }
    return reverse
}
document.write(reverseString('hello Mr.Wael'))
console.log(reverseString('hello Mr. Wael'))

/*countChars*/

function countChars(str) {
    let count=0
    for(let i in str) {
        count ++
    }
    return count
}
document.write(countChars('I like studying at Gomycode.'))
console.log(countChars('I like studying at Gomycode.'))

/*capWord */
function capWords(str) {
    let arr = str.split(" "); 
    let newArr = [];
    
    for (let i in arr) {
        let word = arr[i];
        let capitalizedWord = word[0].toUpperCase() + word.substring(1);
        newArr.push(capitalizedWord); 
    }
    
    return newArr.join(" "); 
}

document.write(capWords("i amal mbarki, i study at gomycode school."));
console.log(capWords("i amal mbarki, i study at gomycode school."));

/*Array Functions: */

/* findMaxMin*/
function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i =0; i <arr.length; i++){
        if(arr[i]> max) {
            max = arr[i]
        }
        if(arr[i]< min){
            min = arr[i]
        }
    }
    return [min, max]
    
}
document.write(findMaxMin([9,11,15,0,3,1,7,6,21,17]))
console.log(findMaxMin([9,11,15,0,3,1,7,6,21,17]))
/*Sum of Array */

function sumArray(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}
document.write(sumArray([8, 2, 3, 10, ]))
console.log(sumArray([8, 2, 3, 10,]))


/*Filter Array: */

function FilterString(arr){
    let newArr=[];
    for ( let value of arr){
        if(typeof value === "string"){
            newArr.push(value)
        }
    }
    return newArr
}
document.write(FilterString(["amal","23",50,60,12,"amoul",20,"lou",]))
console.log(FilterString(["amal","23",50,60,12,"amoul",20,"lou",]));

/*Mathematical Functions: */

function factorial(fac) {
   
    let result = 1; 
    for (let i = 1; i <=fac; i++) {
        result *= i; 
    }
    return result;
}

let amal = parseInt(window.prompt());
document.write(factorial(amal));
console.log(factorial(amal)); 


/* Prime Number Check*/

function isPrime(number) {
    
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }

    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
let numbers=[1,5,10,4,7,3,2,8,6,9];

let primeNumbers =numbers.filter(isPrime)

document.write( primeNumbers)

console.log( primeNumbers)



/*Fibonacci Sequence: */


function fibonacci(n) {

    let sequence = [];

    if (n <= 0) {
        return sequence;
    }
    
    
    sequence.push(0);
    if (n === 1) {
        return sequence;
    }

    sequence.push(1); 
    

    for (let i = 2; i < n; i++) {
        let nextNumber = sequence[i - 1] + sequence[i - 2];
        
        sequence.push(nextNumber);
    }

    return sequence;
}

let terms =10;
let fibonacciSequence = fibonacci(terms);

document.write(fibonacciSequence);
console.log(fibonacciSequence);

