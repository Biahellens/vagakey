import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Home, Login } from './pages/index'

const AppRoutes = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route element = {<Home />}  path="/" />
            <Route element = {<Login />}  path="/login" />
        </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes