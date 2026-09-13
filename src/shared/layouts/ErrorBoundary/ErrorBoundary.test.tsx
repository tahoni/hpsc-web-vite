import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { ErrorBoundary } from "./ErrorBoundary";

afterEach(cleanup);

const ThrowingChild = (): never => {
  throw new Error("Test error");
};

describe("ErrorBoundary", () => {
  it("renders its children when nothing throws", () => {
    render(
      <ErrorBoundary>
        <div>All good</div>
      </ErrorBoundary>,
    );

    expect(screen.getByText("All good")).not.toBeNull();
  });

  it("renders a friendly fallback instead of crashing when a child throws", () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowingChild />
      </ErrorBoundary>,
    );

    expect(screen.getByText("Something went wrong")).not.toBeNull();
    expect(screen.getByText("Reload page")).not.toBeNull();
    expect(screen.getByText("Go to homepage")).not.toBeNull();

    consoleErrorSpy.mockRestore();
  });
});
