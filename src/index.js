import { extend } from './util'
import { init } from './core/init'
import ScrollTable from './core/instance'
extend(ScrollTable.prototype, '_init', init)
export default ScrollTable
