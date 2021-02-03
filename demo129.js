function* createIterator(items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i]
    }
}

const iterator = createIterator([1, 2, 3])
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())