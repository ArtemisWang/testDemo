Math.add = function(m, n) {
    let len1, len2
    try {
        len1 = m.toString().split('.')[1].length
    } catch (e) {
        len1 = 0
    }
    try {
        len2 = n.toString().split('.')[1].length
    } catch (e) {
        len2 = 0
    }
    let mul = Math.pow(10, Math.max(len1, len2))
    return (m * mul + n * mul) / mul
}

Number.prototype.add = function(v) {
    return Math.add(v, this)
}

console.log(Math.add(1, 2))