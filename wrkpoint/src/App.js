import './App.css';
import { UserContext } from './context/UserContext'

function App() {

  const {userState, verifyUser} = useContext(UserContext)
  const [user, setUser] = userState

  return (
    <div className="App">

    </div>
  );
}

export default App;
