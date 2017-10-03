var _ = {
    map: function(arr, callback) {
        for (let i = 0; i < arr.length; i++){
          arr[i] = callback(arr[i]);
        }
        return arr;
    },
    reduce: function(arr, callback, memo=arr[0]) { 
        for (let i = 0; i < arr.length; i++){
            memo = callback(memo, arr[i]);
        }
        return memo;
    },
    find: function(arr, callback) {   
        for (let i = 0; i < arr.length; i++){
            if (callback(arr[i])){
                return arr[i];
            }
        }
    },
    filter: function(arr, callback) { 
        let newArr = [];
        for (let i = 0; i < arr.length; i++){
            if (callback(arr[i])){
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
    reject: function(arr, callback) { 
        let newArr = [];
        for (let i = 0; i < arr.length; i++){
            if (!callback(arr[i])){
                newArr.push(arr[i]);
            }
        }
        return newArr; 
    }
  }

console.log(_.map([1,2,3,4,5,6], function(num){ return num * 3 }))
console.log(_.reduce([1,2,3,4,5,6], function(memo, num){ return memo + num }))
console.log(_.find([1,2,3,4,5,6], function(num){ return num % 2 === 0 }))
console.log(_.filter([1,2,3,4,5,6], function(num){ return num % 2 === 0 }))
console.log(_.reject([1,2,3,4,5,6], function(num){ return num % 2 === 0 }))