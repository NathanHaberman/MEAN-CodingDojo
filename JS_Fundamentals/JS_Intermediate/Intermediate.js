function starString(num){
    return '*'.repeat(num);
}

function drawStar(arr){
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] == 'number'){
            console.log('*'.repeat(arr[i]));
        }
        else{
            console.log(arr[i][0].repeat(arr[i].length))
        }
    }
}