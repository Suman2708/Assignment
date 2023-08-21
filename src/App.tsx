// import { useState } from 'react'
import { Routes,Route } from 'react-router-dom';
import SignUp from './components/SignUp';
// import Login from './components/Login';
import CheckboxForm from './components/CheckboxForm'
// import { useRoutes } from 'react-router-dom';
import Homesection from './components/Homesection';
import Navbar from './components/navbar/Navbar';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route  path='/' element={<SignUp />}  />
   
      <Route  path='/checkbox' element={<CheckboxForm/>}  />
      <Route  path='/homesection' element={<Homesection/>}  />
      <Route  path='/navbar' element={<Navbar/>}  />
    </Routes>
    
    
    </>
  )
}

export default App
