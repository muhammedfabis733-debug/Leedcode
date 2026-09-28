/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let open = 0;
    let max_open = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") open++;
        else if (s[i] == ")") open--;

        if (open > max_open) max_open = open;
    }

    return max_open;
};