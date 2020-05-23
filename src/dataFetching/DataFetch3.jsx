import React, { useEffect, useReducer } from 'react'
import axios from 'axios';

const initialState = {
    post: {},
    loading: true,
    error:''
}
const reducer = (state,action) => {
    switch (action.type) {
        case "DATA_SUCCESS":
            return {
                post: action.payLoad,
                loading: false,
                error:" "
            }
        case "DATA_ERROR":
            return {
                post: {},
                loading: false,
                error:'something went wrong'
            }
        default: 
        return state
    }
}

function DataFetch3() {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicod.com/posts/1')
            .then(res => {
            dispatch({type:"DATA_SUCCESS",payLoad:res.data})
            })
            .catch(error => {
            dispatch({type:"DATA_ERROR"})
         })
    },[])

    return (
        <div>
            {state.loading ? "loading" :state.post.title}
            {state.error? state.error:null}
        </div>
    )
}

export default DataFetch3
