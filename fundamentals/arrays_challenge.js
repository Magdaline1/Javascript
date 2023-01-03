const addToBatch = (arr, n) => {
if (arr.length < 5) {
    arr = arr.concat(n)
    return arr
} else {
    return arr
}
}

module.exports = addToBatch