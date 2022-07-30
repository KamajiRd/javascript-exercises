// const removeFromArray = function(arr, value, ...theArgs) {

//     return arr.filter(function(ele) {
//         return ele != value && ele != theArgs;
//     });

// };


const removeFromArray = function (arr, ...theArgs) {
    return arr.filter( val => !theArgs.includes(val) )
  };
  
// Do not edit below this line
module.exports = removeFromArray;
