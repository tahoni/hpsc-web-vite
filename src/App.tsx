import {ReactElement} from "react";
import {Route, Routes} from "react-router";
import {Breakpoints, Layout} from "./layout";
import {AboutUsPage, HomePage} from "./pages";
import {ImageWithSourceAndDescription} from "@tahoni/tahoni-lib-react";
import leftShooter from "/assets/images/pictures/shooter-left-transparent.png";
import rightShooter from "/assets/images/pictures/shooter-right-transparent.png";
import './App.scss'

function App(): ReactElement {
    const leftSidebarImage: ImageWithSourceAndDescription =
        new ImageWithSourceAndDescription(leftShooter, "");
    const rightSidebarImage: ImageWithSourceAndDescription =
        new ImageWithSourceAndDescription(rightShooter, "");

    return (
        <>
            <Routes>
                <Route element={<Layout
                        leftSideImage={leftSidebarImage} rightSideImage={rightSidebarImage}
                />}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/about" element={<AboutUsPage/>}/>
                    <Route path="*" element={<HomePage/>}/>
                </Route>
            </Routes>
            <Breakpoints/>
        </>
    )
}

export default App;
