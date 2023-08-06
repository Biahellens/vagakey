import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  * {
    padding:0;
    margin:0;
    vertical-align:baseline;
    list-style:none;
    border:0;
  },

  body, html {
    padding: 0;
    margin: 0;
    height: 100%;
  }
`
 
export default GlobalStyle;