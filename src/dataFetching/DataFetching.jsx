import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})
    
     useEffect(() => {
         fetchPost();
     }, [])
    const fetchPost = async() => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        setLoading(false)
        setPost(res.data)
        setError('')
        
        } catch (error) {
            setError(error, 'Something went wrong')
            setLoading(false)
            setPost({})
        }
    }
    return (
        <div>
        
            {loading ? 'loading' : post.title} 
            {error? error:null} 
        </div>
    )
}

export default DataFetching
