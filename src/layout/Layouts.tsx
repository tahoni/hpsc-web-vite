import {ReactElement} from "react";
import {Container} from "react-bootstrap";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Body} from "./Body";
import classes from "./Layout.module.scss";

export const Layout = (): ReactElement => {
    return (
        <Container fluid>
            <div className={classes.main}>
                <header className={classes.header}>
                    <Header/>
                </header>
                <main className={classes.body}>
                    <Body/>
                </main>
                <footer className={classes.footer}>
                    <Footer/>
                </footer>
            </div>
        </Container>
    )
}
