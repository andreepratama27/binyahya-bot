import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StepItem } from "./StepItem";

describe("StepItem", () => {
  it("renders step number, title, and description", () => {
    render(
      <StepItem
        step={1}
        title="You send a message"
        description="Via WhatsApp"
      />,
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("You send a message")).toBeInTheDocument();
    expect(screen.getByText("Via WhatsApp")).toBeInTheDocument();
  });

  it("renders dashed connector when not last", () => {
    const { container } = render(
      <StepItem step={1} title="Step" description="Desc" isLast={false} />,
    );
    expect(container.querySelector(".border-dashed")).toBeTruthy();
  });

  it("does not render connector when last", () => {
    const { container } = render(
      <StepItem step={4} title="Step" description="Desc" isLast={true} />,
    );
    expect(container.querySelector(".border-dashed")).toBeNull();
  });
});
