const removeFromArray = function(...args) {
    let newArray = [];
    const array = args[0];
    array.forEach((item) => {
        if(!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }
//


// Do not edit below this line
module.exports = removeFromArray;
