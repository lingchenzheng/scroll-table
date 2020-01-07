import { queryEl } from '../util'
import { getDomSize } from './calc'
import { genContainerEle, genHead } from './gen'
export function init(el) {
    this.$nodeList = {}
    this.$el = queryEl(el)
    const size = getDomSize(this.$el)
    if (!!size) {
        let width = (this.$width = size.width)
        let height = (this.$height = size.height)
        genContainerEle.call(this, width, height)
        genHead.call(this, this.$options)
    }

    this.$el.appendChild(this.$nodeList.root)
}
