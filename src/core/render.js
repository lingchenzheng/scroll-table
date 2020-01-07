import { isArray, warn } from '../util'
import { genBody } from './gen'
import { getDomSize } from './calc'
export function initRender(Cotr) {
    Cotr.prototype.setOption = setOption
    Cotr.prototype.destory = destory
    Cotr.prototype.stop = stop
    Cotr.prototype.start = start
}

/**
 * @description generate table`s content
 * @param {Array} data
 */
export function setOption(data) {
    const options = this.$options
    if (!isArray(data)) {
        warn('"data" must be an array')
        return
    }
    genBody.call(this, options, data)
}

export function destory() {}

export function stop() {}

export function start() {
    const options = this.$options
    let table = this.$nodeList.$table
    let { height } = getDomSize(table)
    if (height > this.$bodyHeight) {
        table.style.transition = `all 6s linear Infinity`
        table.style.transform = `translateY(-100%)`
    }
}
