import {ReactElement} from "react";
import classes from "./Header.module.scss";

interface HeaderContentProps {
    title: string;
}

export const HeaderContent = (props: HeaderContentProps): ReactElement => {
    return (
        <div className={classes.HeaderContent}>
            <span className={classes.HeaderText}>
                <h1>{props.title}</h1>
            </span>
        </div>
    )
}
