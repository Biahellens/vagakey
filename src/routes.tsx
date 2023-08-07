import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Home, LoginPartner, LoginCustomer, CreateAccountCustomer, CreateAccountPartner } from './pages/index'

const AppRoutes = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route element = {<Home />}  path="/" />
            <Route element = {<LoginPartner />}  path="/loginPartner" />
            <Route element = {<LoginCustomer />}  path="/loginCustomer" />
            <Route element = {<CreateAccountCustomer />}  path="/createAccountCustomer" />
            <Route element = {<CreateAccountPartner />}  path="/createAccountPartner" />
        </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes