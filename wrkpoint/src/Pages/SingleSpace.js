import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import SingleDetail from '../Components/SingleDetail'

const SingleSpace = (props) => {

    const [space, setSpace] = useState([])
    const {userState} = useContext(UserContext)
    const [user, setUser] = userState

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
            <SingleDetail space={space} user={user} />
            }
        </div>
    )
}


export default SingleSpace