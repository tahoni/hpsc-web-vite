import { Component, ErrorInfo, ReactElement, ReactNode } from "react";
import classes from "./ErrorBoundary.module.scss";

export interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * Top-level React error boundary around the application's route tree.
 *
 * Catches any otherwise-unhandled error thrown while rendering its children and, instead of
 * leaving the visitor with a blank or broken page, renders a friendly fallback with a way to
 * recover. The caught error is still logged via `console.error` so it isn't invisible to anyone
 * inspecting the browser console, since this site has no backend or remote error monitoring to
 * report to instead.
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  override state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(
      "Unhandled error caught by ErrorBoundary:",
      error,
      errorInfo,
    );
  }

  override render(): ReactNode {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

/**
 * Friendly fallback UI shown in place of the route tree once ErrorBoundary has caught an error.
 *
 * Deliberately self-contained and dependency-free (a plain anchor and a page reload, not
 * react-router's Link or any other component that could itself be part of what broke), since a
 * fallback that can also throw would leave the visitor with nothing at all.
 *
 * @returns The rendered fallback UI.
 */
const ErrorFallback = (): ReactElement => {
  return (
    <div className={classes.errorFallback}>
      <h2>Something went wrong</h2>
      <p>
        We&apos;re sorry, this page has run into a problem. Try reloading the
        page, or return to the homepage.
      </p>
      <div className={classes.errorFallbackActions}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Reload page
        </button>
        <a className="btn btn-outline-secondary" href="/">
          Go to homepage
        </a>
      </div>
    </div>
  );
};
