import { NavLink } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { useContext } from 'react'



const NavBar = () => {

    const {userState} = useContext(UserContext)
    const [user, setUser] = userState

    return (
        <>
            <nav className="nav-container">
                <div className="nav-left">
                    <NavLink className="nav-logo" activeClassName="nav-active" exact to='/'>Wrkpoint</NavLink>
                </div>
                <div className="nav-right">
                    <NavLink className="nav-link" activeClassName="nav-active" to='/login'>Login</NavLink>
                    <NavLink className="nav-link-button" activeClassName="nav-active-button" to='/register'>Get Started</NavLink>
                    <span className="nav-side-margin"></span>
                </div>
            </nav>
        </>    
    )
}

export default NavBar