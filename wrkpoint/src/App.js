import './App.css';
import { UserContext } from './Context/UserContext'
import { useContext } from 'react'
import { Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Landing from './Pages/Landing'
import Registration from './Pages/Registration'
import Dashboard from './Pages/Dashboard'
import AllSpaces from './Pages/AllSpaces'
import SpaceListing from './Pages/SpaceListing'


function App() {

  const {userState, verifyUser} = useContext(UserContext)
  const [user, setUser] = userState

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container">
        <Route exact path='/' render={() => {
          return <Landing />
        }} />
        <Route path='/login' render={() => {
          return <Registration type={'Login'} />
        }} />
        <Route path='/register' render={() => {
          return <Registration type={'Register'} />
        }} />        
      </div>
    </div>
  );
}

export default App;
