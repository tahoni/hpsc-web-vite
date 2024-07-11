import {ReactElement} from "react";
import {Outlet} from "react-router";
import {Container} from "react-bootstrap";
import classes from "./layout.module.scss";

export const Layout = (): ReactElement => {
    return (
        <Container fluid className={classes.layout}>
            <main>
                <Outlet/>
            </main>
        </Container>
    )
}
