import {ReactElement} from "react";
import {Container} from "react-bootstrap";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Body} from "./Body";
import classes from "./Layout.module.scss";
import {LayoutProps} from "./LayoutProps.ts";

export const Layout = (props: LayoutProps): ReactElement => {
    return (
        <Container fluid className={classes.Layout}>
            <header className={classes.header}>
                <Header/>
            </header>
            <main className={classes.body}>
                <Body {...props}/>
            </main>
            <footer className={classes.footer}>
                <Footer/>
            </footer>
        </Container>
    )
}
