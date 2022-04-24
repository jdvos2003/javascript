const canConstruct = (target, wordBank,memo={}) => {
    if (target === '') return true;
    if (target in memo) return memo[target];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix,wordBank, memo) ===true) {
                memo[target] =  true;
                return true;
            }

        }
    }
    memo[target] = false;
    return false;
};

console.log(canConstruct("abcdef",["ab","abc","cd","def","abcd"]));
console.log(canConstruct("skateboard",["bo","rd","ate","t","ska","sk","boar"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e","ee","eee","eeee","eeeee","eeeeee"]));
console.log(canConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]));