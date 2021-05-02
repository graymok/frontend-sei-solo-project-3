import { useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { Redirect } from 'react-router-dom'



const RegisterLoginForm = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {userState} = useContext(UserContext)
    const [user, setUser] = userState


    return (
        <div className="form-container">
            <form className="form-login">
                <input className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="input-field" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input className="input-button" type="submit" value="Login" />
            </form>
        </div>
    )
}

export default RegisterLoginForm