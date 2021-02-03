function createIterator(items) {
    var i = 0
    return {
        next: function() {
            var done = i >= items.length
            var value = done ? undefined : items[i++]
            return {
                done,
                value
            }
        }
    }
}

const iterator = createIterator([1, 2, 3])
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())