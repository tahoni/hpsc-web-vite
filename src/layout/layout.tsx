import {Container} from "react-bootstrap";
import {Outlet} from "react-router";
import classes from "./layout.module.scss";

export const Layout = () => {
    return (
        <Container fluid className={classes.layout}>
            <main>
                <Outlet/>
            </main>
        </Container>
    )
}
