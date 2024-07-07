import './App.scss'
import {Container} from "react-bootstrap";
import {Home} from "./pages/home.tsx";
import "./App.scss";

function App() {
  return (
      <Container fluid={true}>
        <Home/>
      </Container>
  )
}

export default App
