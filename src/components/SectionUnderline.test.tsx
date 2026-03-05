import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SectionUnderline } from "./SectionUnderline";

describe("SectionUnderline", () => {
  it("renders an svg with aria-hidden", () => {
    const { container } = render(<SectionUnderline />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
    expect(svg?.getAttribute("aria-hidden")).toBe("true");
  });

  it("applies default width class", () => {
    const { container } = render(<SectionUnderline />);
    expect(container.querySelector(".w-48")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(<SectionUnderline className="w-32" />);
    expect(container.querySelector(".w-32")).toBeTruthy();
  });
});
