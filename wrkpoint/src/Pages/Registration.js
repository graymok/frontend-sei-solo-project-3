import { useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import WorkstyleForm from '../Components/WorkstyleForm'


const Registration = (props) => {

    const {userState} = useContext(UserContext)
    const [user, setUser] = userState

    const [quizState, setQuizState] = useState(null)

    const handleLogin = (e) => {
        e.preventDefault()
        loginUser()
    }

    const loginUser = async () => {
        let response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
            email: props.email,
            password: props.password
        })
        console.log(response)
    }

    const startQuiz = (e) => {
        e.preventDefault()
        setQuizState('active')
    }


    return (
        <div className="registration-container">
            { props.type === 'Login' && quizState === null && 
            <div className="form-container">
                <span className="form-headline">Welcome back!</span>
                <form className="form-inputs" onSubmit={handleLogin}>
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
                <span className="form-headline">Let's get started!</span>
                <form className="form-inputs" onSubmit={startQuiz}>
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
            <div className="registration-overlay"></div>
            <img className="registration-background" src="https://officesnapshots.com/wp-content/uploads/2020/02/gensler-offices-london-10.jpg" alt="office" />            
        </div>
    )
}

export default Registration