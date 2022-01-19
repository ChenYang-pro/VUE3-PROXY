const get = createGetter(), set = createSetter();

function createGetter() {
    return function get(target, property, receiver) {
        const res = Reflect.get(target, property, receiver);
        console.log(`响应式正在获取 ${target[property]}`);
        return res;
    }
};

function createSetter() {
    return function set(target, property, value, receiver) {
        const res = Reflect.set(target, property, value, receiver);
        console.log(`响应式正在设置 key = ${property}, value = ${value}`);
        return res;
    }
}


const mutableHandler = {
    get,
    set
};

export {
    mutableHandler
};
