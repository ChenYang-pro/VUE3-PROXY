import { isObject } from './shared/utils'
import { mutableHandler } from './mutableHandle'

function reactive(target) {
    return createReactiveObject(target, mutableHandler);
}


function createReactiveObject(target, baseHandle) {
    if (!isObject(target)) {
        return target
    }
    const obsever = new Proxy(target, baseHandle);
    return obsever;
}



export {
    reactive
}