import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HookUserState from './playground/HookUserState'
import HomeHooks from './playground/HomeHooks'
import HookUseNavigate from './playground/HookUseNavigate'

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeHooks />}></Route>
         <Route path='/useState' element={<HookUserState />}></Route>
         <Route path='/useNavigate' element={<HookUseNavigate />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

