import React from "react"
import {Routes, NavLink } from "react-router-dom"
import { stateContext } from './Context'
import { useContext } from "react"
export const Navbar = () => {
    const {state,dispatch} = useContext(stateContext)
    console.log('state',state);
    const logout=()=>{
        localStorage.setItem("isLoggedIn",false)
        dispatch({
            type : "logout",
            payLoad : { isAuthenticated : false}
          })
    }
    return(
        <Routes>
            <ul>
                <li>
                    <NavLink to = "/Home" style={({isActive})=>isActive? {color : "red"} : null}>HOME</NavLink>
                </li>
                <li>
                <NavLink to = "/Cartidems" style={({isActive})=>isActive? {color : "red"} : null}>CARTIDEMS</NavLink>
                </li>
                <li>
                <NavLink to = "/Favourites" style={({isActive})=>isActive? {color : "red"} : null}>FAVOURITES</NavLink>
                </li>
                <li>
                <NavLink  style={({isActive})=>isActive? {color : "red"} : null} onClick={()=>logout()} to = "/">Logout</NavLink>
                </li>
            </ul>
            </Routes>
    )
}
export default Navbar;