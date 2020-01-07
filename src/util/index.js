export * from './lang'
export * from './options'

export function extend(target, name, val) {
    if (target.hasOwnProperty(name)) return
    target[name] = val
}

export function js2css(js) {
    let css = ''
    if (js && typeof js === 'object') {
        const keys = Object.keys(js)
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i]
            let name = toLine(key)
            css += `${name}:${js[key]};`
        }
    }
    return css
}

function toLine(key) {
    return key.replace(/([A-Z])/g, '-$1').toLowerCase()
}
