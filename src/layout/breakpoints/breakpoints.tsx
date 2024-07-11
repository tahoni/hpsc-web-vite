import {ReactElement} from "react";
import classes from "./breakpoints.module.scss";

export const Breakpoints = (): ReactElement => {
    return (
/*
        // Solution by Natwar Singh in reply to the following question on Stack Overflow:
        // "Display Bootstrap breakpoint name when resizing the screen"
        // https://stackoverflow.com/questions/65319012/display-bootstrap-breakpoint-name-when-resizing-the-screen
        // https://stackoverflow.com/users/1579939/natwar-singh
*/
        <div id="breakpoints" className={classes.breakpoints}>
            {(import.meta.env.VITE_SHOW_BREAKPOINTS === "true") ?
                <div className={classes.breakpoint}>
                <div className="d-block d-sm-none">Extra Small (xs)</div>
                <div className="d-none d-sm-block d-md-none">Small (sm)</div>
                <div className="d-none d-md-block d-lg-none">Medium (md)</div>
                <div className="d-none d-lg-block d-xl-none">Large (lg)</div>
                <div className="d-none d-xl-block d-xxl-none">X-Large (xl)</div>
                <div className="d-none d-xxl-block">XX-Large (xxl)</div>
            </div>
                : ''}
        </div>
    )
}
