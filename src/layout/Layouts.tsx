import {ReactElement} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Body} from "./Body";
import classes from "./Layouts.module.scss";

export const Layout = (): ReactElement => {
    return (
        <div className={classes.layout}>
            <header>
                <Header/>
            </header>
            <main>
                <Body/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

