import { createEle, isArray, attr } from '../util'
import { calcHeight } from './calc'

/**
 * @description generate root ele
 */
export function genContainerEle() {
    const root = (this.$nodeList.root = createEle('div'))
    root.style.cssText = `
        width:100%;
        height:100%;
    `
}

/**
 * @description generate table head
 * @param {Object} options
 */
export function genHead(options) {
    const { head, cols } = options
    const headNode = (this.$nodeList.head = createEle('div'))
    headNode.style.cssText = `
        width:100%;
        background-color: ${head.backgroundColor};
        font-size: ${head.fontSize}px;
        color: ${head.color};
        font-weight: ${head.fontWeight};
    `
    if (isArray(cols) && cols.length > 0) {
        let table = createEle('table')
        let colgroup = (this.$nodeList.$colgroup = createEle('colgroup'))
        let colNode = createEle('col')
        let thead = createEle('thead')
        let tr = createEle('tr')
        let th = createEle('th')
        table.style.cssText = `
            border-collapse: collapse;
            width:${options.width};
        `
        for (let i = 0; i < cols.length; i++) {
            let col = cols[i]
            let cloneColNode = colNode.cloneNode()
            let cloneTh = th.cloneNode()
            //gen col schema
            attr(cloneColNode, 'name', `table_column_${i + 1}`)
            attr(cloneColNode, 'width', col.width)
            colgroup.appendChild(cloneColNode)
            cloneTh.innerText = col.label
            tr.appendChild(cloneTh)
        }
        table.appendChild(colgroup.cloneNode(true))
        thead.appendChild(tr)
        table.appendChild(thead)
        headNode.appendChild(table)
    }
    this.$nodeList.root.appendChild(headNode)
}

export function genBody(options, data) {
    const { body, cols } = options
    const nodeList = this.$nodeList
    const bodyNode = (nodeList.body = createEle('div'))
    calcHeight(this, nodeList.head)
    let height = this.$bodyHeight
    bodyNode.style.cssText = `
        width:100%;
        overflow-y:hidden;
        background-color:${body.backgroundColor};
        color:${body.color};
        font-size:${body.fontSize}px;
        font-weight:${body.fontWeight};
        height:${height}px;
    `
    if (isArray(cols) && cols.length > 0 && isArray(data) && data.length > 0) {
        let table = (nodeList.$table = createEle('table'))
        let tbody = createEle('tbody')
        let tr = createEle('tr')
        let td = createEle('td')
        table.style.cssText = `
            border-collapse: collapse;
            width:${options.width};
        `
        td.style.cssText = `
            border:1px solid #d7d7d7;
            text-align:center;
        `
        for (let j = 0; j < data.length; j++) {
            let item = data[j]
            let cloneTr = tr.cloneNode()
            for (let i = 0; i < cols.length; i++) {
                let col = cols[i]
                let { render, prop } = col
                let cloneTd = td.cloneNode()
                let htm = item[prop]
                if (render && typeof render === 'function') {
                    htm = render.call(this, item, col, j, i, this.$context)
                }
                cloneTd.innerHTML = htm
                cloneTr.appendChild(cloneTd)
            }
            tbody.appendChild(cloneTr)
        }
        table.appendChild(nodeList.$colgroup.cloneNode(true))
        table.appendChild(tbody)
        bodyNode.appendChild(table)
    }
    this.$nodeList.root.appendChild(bodyNode)
}
