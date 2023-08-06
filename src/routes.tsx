import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Home, LoginPartner, LoginCustomer } from './pages/index'

const AppRoutes = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route element = {<Home />}  path="/" />
            <Route element = {<LoginPartner />}  path="/loginPartner" />
            <Route element = {<LoginCustomer />}  path="/loginCustomer" />
        </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes