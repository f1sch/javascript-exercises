const sumAll = function(start, end) {
    if (start < 0 || end < 0) return 'ERROR';
    else if (!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
    else if (start > end) {
        const tmp = start;
        start = end;
        end = tmp;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
