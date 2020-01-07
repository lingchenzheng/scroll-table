const headOption = {
    fontSize: 16,
    color: '#d7d7d7',
    backgroundColor: '#ffffff',
    border: '',
    fontWeight: 700
}

const bodyOption = {
    fontSize: 14,
    color: '#d7d7d7',
    backgroundColor: '#ffffff',
    fontWeight: 400
}

/**
 * const ColSchema = {
 *      lable: '',
 *      witdh: 'auto',
 *      prop: '',
 *      render: function(row, cell, index) {},
 *      filter:function(val) {}
 * }
 */

export default {
    head: headOption,
    body: bodyOption,
    speed: 20,
    cols: [],
    width: '100%'
}
