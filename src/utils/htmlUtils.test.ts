import { describe, expect, it } from "vitest";
import { nonBreakingHyphens, nonBreakingSpaces, sanitizeValue } from "./htmlUtils";

const NON_BREAKING_HYPHEN = "‑";
const NON_BREAKING_SPACE = " ";

describe("sanitizeValue", () => {
  it("strips HTML tags and attributes", () => {
    expect(sanitizeValue('<script>alert("x")</script>Hello')).toBe("Hello");
    expect(sanitizeValue('<a href="/x" onclick="x()">Link</a>')).toBe("Link");
  });

  it("returns plain text unchanged", () => {
    expect(sanitizeValue("Plain text")).toBe("Plain text");
  });

  it("returns an empty string when no value is given", () => {
    expect(sanitizeValue()).toBe("");
    expect(sanitizeValue("")).toBe("");
  });
});

describe("nonBreakingHyphens", () => {
  it("replaces every hyphen with a non-breaking hyphen", () => {
    expect(nonBreakingHyphens("well-known-issue")).toBe(
      `well${NON_BREAKING_HYPHEN}known${NON_BREAKING_HYPHEN}issue`,
    );
  });

  it("leaves strings without hyphens unchanged", () => {
    expect(nonBreakingHyphens("no hyphens here")).toBe("no hyphens here");
  });

  it("returns an empty string when no value is given", () => {
    expect(nonBreakingHyphens()).toBe("");
    expect(nonBreakingHyphens("")).toBe("");
  });
});

describe("nonBreakingSpaces", () => {
  it("replaces every space with a non-breaking space", () => {
    expect(nonBreakingSpaces("a b  c")).toBe(
      `a${NON_BREAKING_SPACE}b${NON_BREAKING_SPACE}${NON_BREAKING_SPACE}c`,
    );
  });

  it("leaves strings without spaces unchanged", () => {
    expect(nonBreakingSpaces("nospaces")).toBe("nospaces");
  });

  it("returns an empty string when no value is given", () => {
    expect(nonBreakingSpaces()).toBe("");
    expect(nonBreakingSpaces("")).toBe("");
  });
});
