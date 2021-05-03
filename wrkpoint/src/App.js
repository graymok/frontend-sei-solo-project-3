import './App.css';
import { UserContext } from './Context/UserContext'
import { useContext, useState } from 'react'
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

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container">
        <Route exact path='/' render={() => {
          return <Landing />
        }} />
        <Route path='/login' render={() => {
          return <Registration type={'Login'} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
        }} />
        <Route path='/register' render={() => {
          return <Registration type={'Register'} name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
        }} />
                      
      </div>
    </div>
  );
}

export default App;
