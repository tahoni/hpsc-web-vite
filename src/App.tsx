import {ReactElement} from "react";
import {Route, Routes} from "react-router";
import {Breakpoints} from "./layout/Breakpoints";
import {UnderConstructionPage} from "./pages/UnderConstructionPage";
import './App.scss'

function App(): ReactElement {
  return (
      <>
          <Routes>
              <Route element={<UnderConstructionPage/>}>
                  <Route path="/" element={<UnderConstructionPage/>}/>
                  <Route path="*" element={<UnderConstructionPage/>}/>
              </Route>
          </Routes>
          <Breakpoints/>
      </>
  )
}

export default App;
