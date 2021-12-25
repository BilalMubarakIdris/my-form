import Home from './Home'
import {Route, Routes} from 'react-router-dom'
import LoginPage from './LoginPage'
import RegistrationPage from './RegistrationPage'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="registeration-page" element={<RegistrationPage />}/>
      </Routes>
    </div>
  );
}

export default App;
