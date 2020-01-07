const _toString = Object.prototype.toString
/**
 * @description 判断一个变量值是不是undefined或null
 * @param {any}
 * @return {Boolean}
 */
export function isDef(v) {
    return v !== undefined && v !== null
}

export function isUndef(v) {
    return v === undefined || v === null
}

/**
 * @description 判断一个对象是不是纯对象
 * @param {any}
 * @return {Boolean}
 */
export function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]'
}

/**
 * @description 判断一个对象是不是数组类型
 * @param {any}
 * @return {Boolean}
 */
export function isArray(obj) {
    return _toString.call(obj) === '[object Array]'
}

/**
 * @description print error info
 * @param {String} desc
 */
export function warn(desc) {
    return new Error(desc)
}

export function hasOwnProperty(obj, name) {
    if (!!obj) {
        return obj.hasOwnProperty(name)
    } else {
        return false
    }
}

export function def(obj, key, val, enumerable = true) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
}

export function createEle(name) {
    if (name && typeof name === 'string') {
        return document.createElement(name)
    } else {
        return null
    }
}

export function attr(dom, key, val) {
    if (dom instanceof HTMLElement) {
        dom.setAttribute(key, val)
    }
}
