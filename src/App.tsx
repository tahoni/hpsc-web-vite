import {ReactElement} from "react";
import {Route, Routes} from "react-router";
import {Breakpoints} from "./layout/Breakpoints";
import {Layout} from "./layout";
import {HomePage} from "./pages/HomePage";
import './App.scss'

function App(): ReactElement {
  return (
      <>
          <Routes>
              <Route element={<Layout/>}>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="*" element={<HomePage/>}/>
              </Route>
          </Routes>
          <Breakpoints/>
      </>
  )
}

export default App;
