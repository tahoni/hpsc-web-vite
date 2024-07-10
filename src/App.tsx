import {Route, Routes} from "react-router";
import {Breakpoints} from "./layout/breakpoints/breakpoints.tsx";
import {Layout} from "./layout/layout.tsx";
import {UnderConstructionPage} from "./pages/under-construction-page.tsx";
import './App.scss'

function App() {
  return (
      <div id="app" className="app">
          <Routes>
              <Route element={<Layout/>}>
                  <Route path="/" element={<UnderConstructionPage/>}/>
                  <Route path="*" element={<UnderConstructionPage/>}/>
              </Route>
          </Routes>
          <Breakpoints/>
      </div>
  )
}

export default App
