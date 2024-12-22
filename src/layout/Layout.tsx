import React, {ReactElement} from "react";
import {Container} from "react-bootstrap";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Body} from "./Body";
import {LayoutProps} from "./LayoutProps.ts";
import classes from "./Layout.module.scss";

export const Layout = React.memo(
    (props: LayoutProps): ReactElement => {
    return (
        <Container fluid className={classes.Layout}>
            <header className={classes.Header}>
                <Header/>
            </header>
            <main className={classes.Body}>
                <Body {...props}/>
            </main>
            <footer className={classes.Footer}>
                <Footer/>
            </footer>
        </Container>
    )
})
