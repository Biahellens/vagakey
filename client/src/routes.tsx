import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { 
    Home, 
    LoginPartner, 
    LoginCustomer, 
    CreateAccountCustomer, 
    CreateAccountPartner, 
    AboutApp,
    VacancyMapCustomer,
    VacancyMapPartner,
    Loading,
    EditMap,
    Plans,
    Payment
} from './pages/index'

const AppRoutes = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route element = {<Home />}  path="/" />
            <Route element = {<LoginPartner />}  path="/loginPartner" />
            <Route element = {<LoginCustomer />}  path="/loginCustomer" />
            <Route element = {<CreateAccountCustomer />}  path="/createAccountCustomer" />
            <Route element = {<CreateAccountPartner />}  path="/createAccountPartner" />
            <Route element = {<AboutApp />} path="/aboutApp" />
            <Route element = {<VacancyMapCustomer />} path='/vacancyMapCustomer' />
            <Route element = {<VacancyMapPartner />} path='/vacancyMapPartner' />
            <Route element = {<Loading />} path='/loading'/>
            <Route element = {<EditMap />} path='/editMap'/>
            <Route element = {<Plans/>} path='/plans' />
            <Route element = {<Payment/>} path='/payment' />
        </Routes>
       </BrowserRouter>
   )
}

export default AppRoutes