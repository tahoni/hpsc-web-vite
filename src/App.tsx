import {Route, Routes} from "react-router";
import {CoverRoutes} from "./routes/cover.tsx";
import {Layout} from "./layout/layout.tsx";
import {Breakpoints} from "./layout/breakpoints/breakpoints.tsx";
import {Home} from "./pages/home.tsx";
import './App.scss'

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
