module.exports = function reverse (n) {
    abs = Math.abs(n).toString().split('');
    abs = abs.reverse().join('');
    return abs
}
