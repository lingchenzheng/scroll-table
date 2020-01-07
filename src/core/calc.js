import { warn } from '../util'
import ScrollTable from './instance'
export function getDomSize(dom) {
    if (dom && dom instanceof HTMLElement) {
        let width = dom.offsetWidth
        let height = dom.offsetHeight
        return {
            width,
            height
        }
    } else {
        warn('parameter must be a domcument element')
    }
}

export function calcHeight(st, headNode) {
    if (st instanceof ScrollTable && headNode instanceof HTMLElement) {
        let { height } = getDomSize(headNode)
        st.$headHeight = height
        st.$bodyHeight = st.$height - height
        return true
    }
    return false
}
