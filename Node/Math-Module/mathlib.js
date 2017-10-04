module.exports = {

// Other way
// module.exports = function (){

//     return {
        add: function(num1, num2) { 
            var sum = num1 + num2;
            console.log(sum);
        },
        multiply: function(num1, num2) {
            var product = num1 * num2;
            console.log(product); 
        },
        square: function(num) {
            var square = num * num;
            console.log(square);
        },
        random: function(num1, num2) {
            var number = Math.floor(Math.random() * (num2 - num1) + num1);
            console.log(number);
        }
    // }
};
  