import './App.scss'
import {Home} from "./pages/home.tsx";
import "./App.scss";
import {Route, Routes} from "react-router";
import {Layout} from "./layout/layout.tsx";
import {Breakpoints} from "./layout/breakpoints/breakpoints.tsx";
import {CoverRoutes} from "./routes/cover.tsx";

function App() {
  return (
      <>
          <Routes>
              <Route element={<Layout/>}>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/cover/*" element={<CoverRoutes/>}/>
                  <Route path="*" element={<Home/>}/>
              </Route>
          </Routes>
          <Breakpoints/>
      </>
  )
}

export default App
