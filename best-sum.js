const bestSum = (targetSum, numbers, memo={}) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    if (targetSum in memo) return memo[targetSum];

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder,numbers, memo);
        if (remainderCombination !== null) {
           const combination = [...remainderCombination, num];
            //if combination is shorter than the current "shortest" update
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
};

// m = target sum
// n = numbers.length

//Brute force
//time: O(n^m *m)
//space O(m^2)

//Memoized
// O(m^2 * n)
// O(m^2)

console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(8,[2,3,5]));
console.log(bestSum(8,[1,4,5]));
console.log(bestSum(100,[1,2,5,25]));