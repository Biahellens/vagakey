import React from 'react'
import AppRoutes from "./routes"
import GlobalStyle from './theme/styles'

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <AppRoutes/>
    </div>
  )
}