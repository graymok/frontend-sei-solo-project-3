import { useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { Redirect } from 'react-router-dom'
import WorkstyleForm from '../Components/WorkstyleForm'


const Registration = (props) => {

    const {userState} = useContext(UserContext)
    const [user, setUser] = userState

    const [quizState, setQuizState] = useState(null)

    const handleLogin = (e) => {
        e.preventDefault()
    }

    const handleRegister = (e) => {
        e.preventDefault()
        setQuizState('active')
    }


    return (
        <div className="registration-container">
            { props.type === 'Login' && quizState === null && 
            <div className="form-container">
                <span className="form-headline">Welcome Back!</span>
                <form className="form-inputs">
                    <label className="input-label" htmlFor="login-email">Email</label>
                    <input className="input-field" value={props.email} onChange={(e) => {props.setEmail(e.target.value)}} />
                    <label className="input-label" htmlFor="login-password">Password</label>
                    <input className="input-field" type="password" value={props.password} onChange={(e) => {props.setPassword(e.target.value)}}/>               
                    <input className="input-button" type="submit" value="LOGIN" />
                </form>
            </div>            
            }
            { props.type === 'Register' && quizState === null &&
            <div className="form-container-register">
                <span className="form-headline">Let's Get Started!</span>
                <form className="form-inputs" onSubmit={handleRegister}>
                    <label className="input-label" htmlFor="register-name">First Name</label>
                    <input className="input-field" value={props.name} onChange={(e) => {props.setName(e.target.value)}} />
                    <label className="input-label" htmlFor="register-email">Email</label>
                    <input className="input-field" value={props.email} onChange={(e) => {props.setEmail(e.target.value)}} />
                    <label className="input-label" htmlFor="register-password">Password</label>
                    <input className="input-field" type="password" value={props.password} onChange={(e) => {props.setPassword(e.target.value)}}/>               
                    <input className="input-button" type="submit" value="NEXT" />
                </form>
            </div>            
            }
            { quizState === 'active' && 
                <WorkstyleForm name={props.name} email={props.email} password={props.password} />
            }            
        </div>
    )
}

export default Registration