import React,{useReducer} from 'react'
const initialState= 0
const reducer = (state,action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
function CountersThree() {
    //multiple reducers
    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispath2] = useReducer(reducer, initialState)
     const [count3, dispath3]= useReducer(reducer,initialState)
    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>
            <div>
                 <div>Count: {count2}</div>
            <button onClick={()=>dispath2('increment')}>Increment</button>
            <button onClick={()=>dispath2('decrement')}>decrement</button>
            <button onClick={()=>dispath2('reset')}>reset</button>
            </div>
            <div>
                 <div>Count: {count3}</div>
            <button onClick={()=>dispath3('increment')}>Increment</button>
            <button onClick={()=>dispath3('decrement')}>decrement</button>
            <button onClick={()=>dispath3('reset')}>reset</button>
            </div>
        </div>
    )
}

export default CountersThree
