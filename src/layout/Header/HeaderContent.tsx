import React, {ReactElement} from "react";
import classes from "./Header.module.scss";

interface HeaderContentProps {
    title: string;
}

export const HeaderContent = React.memo(
    (props: HeaderContentProps): ReactElement => {
    return (
        <div className={classes.HeaderContent}>
            <div className={classes.HeaderText}>
                <h1>{props.title}</h1>
            </div>
        </div>
    )
})
