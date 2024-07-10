import {Route, Routes} from "react-router";
import {Layout} from "./layout/layout.tsx";
import {Breakpoints} from "./layout/breakpoints/breakpoints.tsx";
import {Home} from "./pages/home.tsx";
import './App.scss'

function App() {
  return (
      <div id="app" className="app">
          <Routes>
              <Route element={<Layout/>}>
                  <Route path="/" element={<Home/>}/>
                  <Route path="*" element={<Home/>}/>
              </Route>
          </Routes>
          <Breakpoints/>
      </div>
  )
}

export default App
