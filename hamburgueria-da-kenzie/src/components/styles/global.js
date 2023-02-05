import { createGlobalStyle } from 'styled-components';




const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');


    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Inter', sans-serif;
    
  }
`
export default GlobalStyle