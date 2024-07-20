import {ReactElement} from "react";
import {Route, Routes} from "react-router";
import {Breakpoints} from "./layout/breakpoints/Breakpoints.tsx";
import {Layout} from "./layout/Layouts.tsx";
import {UnderConstructionPage} from "./pages/UnderConstruction/UnderConstructionPage.tsx";
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
