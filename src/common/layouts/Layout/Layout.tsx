import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Body } from "../Body";
import { LayoutProps } from "./LayoutProps";
import classes from "./Layout.module.scss";

/**
 * Functional component that represents the layout structure of the application.
 *
 * The layout includes a header, a main body section, and a footer, and uses
 * a fluid `Container` to ensure responsive behaviour. The component integrates
 * child components for each respective section and passes down relevant props.
 *
 * The component uses `React.memo` for performance optimisation by memoising its rendering output
 * to prevent unnecessary re-renders when props do not change.
 *
 * @param props - The properties required to render the component.
 * @returns A React element that defines the layout structure.
 */
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
