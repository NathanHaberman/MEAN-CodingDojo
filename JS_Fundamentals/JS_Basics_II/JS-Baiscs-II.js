function magic_multiply(x, y){
    if (typeof x === 'number' && typeof y === 'number'){
        if (x === 0 && y === 0){
            return('All Inputs 0');
        }
        return(x*y);
    }
    if(typeof x === 'object'){
        for (let i=0; i<x.length; i++){
            x[i] *= y;
        }
        return(x);
    }
    if(typeof x === 'string' || typeof y === 'string'){
        return("You can't multiply by a string")
    }
}

let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10

let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]

let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"