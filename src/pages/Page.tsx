import {ReactElement} from "react";
import {PagesProps} from "./PagesProps.ts";

export const Page = (props: PagesProps): ReactElement => {
    return (
        <>
            {props.child}
        </>
    )
}
