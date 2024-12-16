import {ReactElement} from "react";
import {Route, Routes} from "react-router";
import {Breakpoints} from "./layout/Breakpoints";
import {Layout} from "./layout";
import {HomePage} from "./pages/Home";
import './App.scss'

function App(): ReactElement {
    return (
        <>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    {/*<Route path="/contacts" element={<Contacts/>}/>*/}
                    {/*<Route path="/faq" element={<FAQ/>}/>*/}
                    {/*<Route path="/how_to_join" element={<HowToJoinPage/>}/>*/}
                    {/*<Route path="/venues" element={<Venues/>}/>*/}
                    <Route path="*" element={<HomePage/>}/>
                </Route>
            </Routes>
            <Breakpoints/>
        </>
    )
}

export default App;
