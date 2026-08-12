/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
   return [n].map(num => num %2 === 0 ? num:num *2)[0];
};
console.log(smallestEvenMultiple(5))

