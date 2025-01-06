import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Body } from "./Body";
import { LayoutProps } from "./LayoutProps.ts";
import classes from "./Layout.module.scss";

export const Layout = React.memo((props: LayoutProps): ReactElement => {
  return (
    <Container fluid className={classes.layout}>
      <header className={classes.header}>
        <Header />
      </header>
      <main className={classes.body}>
        <Body {...props} />
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </Container>
  );
});
