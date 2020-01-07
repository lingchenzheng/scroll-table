import { util, createEle, attr } from '../util'

export function addRule(rules) {
    let style = createEle('style')
    attr(style, 'type', 'text/css')
    return function(name) {
        let id = Date.now() + ''
        attr(style, 'id', id)
        document.head.appendChild(style)
        let len = document.styleSheets.length
        let sheet = document.styleSheets[len - 1]

        return id
    }
}

export function delRule(id) {
    let style = document.getElementById(id)
    document.head.removeChild(style)
}
