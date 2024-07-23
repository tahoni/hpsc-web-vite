import {ReactElement} from "react";
import {Route, Routes} from "react-router";
import {Breakpoints} from "./layout/Breakpoints";
import {Layout} from "./layout";
import {UnderConstructionPage} from "./pages/UnderConstruction";
import './App.scss'

function App(): ReactElement {
  return (
      <>
          <Routes>
              <Route element={<Layout/>}>
                  <Route path="/" element={<UnderConstructionPage/>}/>
                  <Route path="*" element={<UnderConstructionPage/>}/>
              </Route>
          </Routes>
          <Breakpoints/>
      </>
  )
}

export default App;
