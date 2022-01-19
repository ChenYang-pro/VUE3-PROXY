
import * as reactive_vue3 from "./vue-reactive/index"

const state = reactive_vue3.reactive({
    name: 'cy',
    age: 24,
    info: {
        job: "student",
        teacher: [
            {
                id: 1,
                name: 'ZLiu'
            },
            {
                id: 2,
                name: 'XJKong'
            }
        ]
    },
    hobby: ['tennis', 'reading']
})


state.name;
state.name = 'jl'