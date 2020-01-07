import { merge, warn } from '../util'
import { initRender } from './render'
import baseOptions from '../baseOptions'

function ScrollTable(options, el, context = undefined) {
    if (!(this instanceof ScrollTable)) return new ScrollTable(options)
    this.$context = context
    if (options && typeof options === 'object') {
        merge(this, options, baseOptions)
    } else {
        warn('options must be a object')
    }
    this._init(el)
}
initRender(ScrollTable)
export default ScrollTable
