import { warn, hasOwnProperty, def } from './lang'

/**
 * @description merge baseOptions and custom options
 * @param {Object} src
 * @param {Object} base
 */
export function merge(st, src, base) {
    const options = (st.$options = Object.create({}))
    const head = (options.head = {})
    const body = (options.body = {})
    mergeDep(src.head, base.head, 'head', head)
    mergeDep(src.body, base.body, 'body', body)
    const keys = Object.keys(base)
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        if (key !== 'head' && key !== 'body') {
            src[key] ? def(options, key, src[key]) : def(options, key, base[key])
        }
    }
}

function mergeDep(src, base, name, target) {
    if (!src || typeof src !== 'object') {
        target[name] = base
    } else {
        for (let key in base) {
            src[key] ? def(target, key, src[key]) : def(target, key, base[key])
        }
    }
}
/**
 * @description query root element
 * @param {any} el
 */
export function queryEl(el) {
    if (el instanceof HTMLElement) return el
    if (typeof el === 'string') {
        el = document.querySelector(el)
        if (el) return el
        warn('"el" is not a HTMLElement')
    }
    warn('"el" is not a HTMLElement')
}

// export function
