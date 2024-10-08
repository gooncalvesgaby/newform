import { createGlobalStyle } from "styled-components"
import Header from "./Components/Header/header.jsx"
import Main from "./Components/Main/main.jsx"
import Footer from "./Components/Footer/footer.jsx"

const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
`

function App() {
  return(
    <>
    <GlobalStyle />
    <Header />
    <Main />
    <Footer />
    </>
  )
  
  
}

export default App
