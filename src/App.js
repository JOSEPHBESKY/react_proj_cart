import Favourites from './Favourites';
import  Login  from './Login';
import Home from './Home';
 import {stateContext} from "./Context"
import {useReducer} from "react"
import { Navigate } from 'react-router-dom';
import Cart from './Cart'
import Navbar from './Navbar'
import {Routes,Route } from "react-router-dom"
import { initialState, stateReducer } from './reducer';
   
function App() {
  const [state,dispatch] = useReducer(stateReducer,initialState)
  console.log("state",state);
  return (
    <div>
    <stateContext.Provider value = {{state,dispatch}}>
    {state?.isAuthenticated  ?      
     (<Routes>
     <Route path='/' element = {<Home/>}></Route>
     <Route path='/Home' element = {<Home/>}></Route>
     <Route path='/Cart' element={<Cart/>}></Route>
     <Route path='/Navbar' element={<Navbar/>}/>
     <Route path='/Favourites' element={<Favourites/>}></Route>
     <Route path='*' element = {<Navigate to = "Home"/>}></Route>
    </Routes>
     ):(
     <Routes>
      <Route path='/Login' element = {<Login/>}></Route>
      <Route path='*' element = {<Navigate to = "Login"/>}></Route>
      
     </Routes>)
     
     }
    </stateContext.Provider>
    </div>
  );
}

export default App;