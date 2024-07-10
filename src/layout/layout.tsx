import {Container} from "react-bootstrap";
import classes from "./layout.module.scss";
import {Outlet} from "react-router";

export const Layout = () => {
    return (
        <Container fluid className={classes.layout}>
            <main>
                <Outlet/>
            </main>
        </Container>
    )
}
