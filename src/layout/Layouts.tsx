import {ReactElement} from "react";
import {Outlet} from "react-router";
import classes from "./Layouts.module.scss";

export const Layout = (): ReactElement => {
    return (
        <div className={classes.layout}>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}
