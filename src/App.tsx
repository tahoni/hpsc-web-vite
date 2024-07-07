import './App.scss'
import {Container} from "react-bootstrap";
import {Breakpoints} from "./layouts/breakpoints/breakpoints.tsx";
import {Home} from "./pages/home.tsx";
import "./App.scss";

function App() {
  return (
      <Container fluid={true}>
          <Breakpoints/>
          <Home/>
      </Container>
  )
}

export default App
