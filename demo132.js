const target = {
    name: 'yt',
    value: 42
}

const proxy = new Proxy(target, {
    has(trapTarget, key) {
        if (key === "value") {
            return false
        }
        return Reflect.has(trapTarget, key)
    }
})

console.log('name' in proxy);
console.log('value' in proxy);