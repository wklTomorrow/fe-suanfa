function _new(fn) {
    const obj = Object.create(fn.prototype)
    const res = fn.call(obj)

    return typeof res === 'Object' ? res : obj
}