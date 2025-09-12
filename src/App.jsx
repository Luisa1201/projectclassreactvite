import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HookUseState from './playground/HookUseState'
import HomeHooks from './playground/HomeHooks'
import HookUseNavigate from './playground/HookUseNavigate'
import HookUseDebugValue from './playground/HookUseDebugValue'
import HookUseReducer from './playground/HookUseReducer'
import HookUseRef from './playground/HookuseRef'
import HookImperativeHandle from './playground/HookUseImperativeHandle'
import HookUseMemo from './playground/HookUseMemo'
import HookUseCallback from './playground/HookUseCallback'
import HookUseTransition from './playground/HookUseTransition'
import HookUseDeferredValue from './playground/HookUseDeferredValue'

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeHooks />}></Route>
         <Route path='/useDebugValue' element={<HookUseDebugValue />}></Route>
         <Route path='/useNavigate' element={<HookUseNavigate />}></Route>
         <Route path='/useState' element={<HookUseState />}></Route>
         <Route path='/useReducer' element={<HookUseReducer />}></Route>
         <Route path='/useRef' element={<HookUseRef />}></Route>
         <Route path='/useImperativeHandle' element={<HookImperativeHandle />}></Route>
         <Route path='/useMemo' element={<HookUseMemo />}></Route>
         <Route path='/useCallback' element={<HookUseCallback />}></Route>
         <Route path='/useTransition' element={<HookUseTransition/>}></Route>
        <Route path='/useDeferredValue' element={<HookUseDeferredValue/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

