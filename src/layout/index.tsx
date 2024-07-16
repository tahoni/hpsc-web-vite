import {ReactElement} from "react";
import {Outlet} from "react-router";
import {Container} from "react-bootstrap";
import styles from "./styles.module.scss";

export const Layout = (): ReactElement => {
    return (
        <Container fluid className={styles.layout}>
            <main>
                <Outlet/>
            </main>
        </Container>
    )
}
