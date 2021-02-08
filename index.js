/**
 * create by zhangxiang on 2021-01-29 15:44
 * 类注释：
 * 备注：
 */

import zxForm from './src/components/form'
import zxTable from './src/components/table'

const components = [
    zxForm,
    zxTable
]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    components
}