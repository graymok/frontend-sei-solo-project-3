import axios from 'axios'
import { useState, useEffect } from 'react'

const SingleSpace = (props) => {

    const [space, setSpace] = useState([])

    const getSingleSpace = async () => {
        let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/spaces/${props.id}`)
        setSpace(response.data.space)
    }

    useEffect(() => {
        getSingleSpace()
    }, [])

    return (
        <div className="single-space-container">
            { space.length === 0 ? 
            <div>Loading...</div>
            :
            <div>Loaded!</div>
            }
        </div>
    )
}


export default SingleSpace