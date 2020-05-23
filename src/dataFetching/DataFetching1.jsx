import React,{useReducer,useEffect} from 'react'
 import  axios from 'axios'

const initialState = {
    error: '',
    loading: true,
    post: {}
}
const reducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payLoad,
                error:'',
            }
        case 'ERROR_DATA':
            return {
                loading: false,
                post:{},
                error:'something went wrong'
            }
        default:return state
     }
 }
function DataFetching1() {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
               dispatch({type:'FETCH_SUCCESS',payLoad:res.data})                                                                              
            }).catch(error => {
            dispatch({type:'ERROR_DATA'})
        })
},[])

const [state,dispatch]= useReducer(reducer,initialState)

    return (
        <div>
            {state.loading ? 'loading' :state.post.title},
            {state.error? state.error:null}
        </div>
    )
}

export default DataFetching1
