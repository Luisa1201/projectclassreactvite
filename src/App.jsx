import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HookUseState from './playground/HookUseState'
import HomeHooks from './playground/HomeHooks'
import HookUseNavigate from './playground/HookUseNavigate'

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeHooks />}></Route>
         <Route path='/useState' element={<HookUseState />}></Route>
         <Route path='/useNavigate' element={<HookUseNavigate />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

