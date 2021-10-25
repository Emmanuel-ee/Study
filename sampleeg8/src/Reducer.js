
export const Reducer = (state = { counter: 0, factor: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 }
        case 'INCREMENTBYFACTOR':
            return { ...state, counter: state.counter + state.factor }
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 }
        case "FACTOR":
            console.log(action.factor)
            return { ...state, factor: action.factor }
        default:
            return state
    }
}