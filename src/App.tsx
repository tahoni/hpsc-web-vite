import {ReactElement} from "react";
import {Route, Routes} from "react-router";
import {Breakpoints} from "./layout/breakpoints";
import {Layout} from "./layout";
import {UnderConstructionPage} from "./pages/UnderConstruction";
import './App.scss'

function App(): ReactElement {
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

export default App;
