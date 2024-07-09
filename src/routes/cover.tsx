import {Route, Routes} from "react-router";
import {Home} from "../pages/home.tsx";
import {CoverLady} from "../pages/cover/lady.tsx";
import {CoverTarget} from "../pages/cover/target.tsx";

export const CoverRoutes = () => {
    return (
        <Routes>
            <Route path="/lady" element={<CoverLady/>}/>
            <Route path="/target" element={<CoverTarget/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
    )
}
