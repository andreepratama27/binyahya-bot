import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TimelineItem } from "./TimelineItem";

describe("TimelineItem", () => {
  it("renders date and event text", () => {
    render(<TimelineItem date="2024" event="Bot family founded" />);
    expect(screen.getByText("2024")).toBeInTheDocument();
    expect(screen.getByText("Bot family founded")).toBeInTheDocument();
  });

  it("renders the vertical connector when not last", () => {
    const { container } = render(
      <TimelineItem date="2024" event="Event" isLast={false} />,
    );
    expect(container.querySelector(".bg-sky-200")).toBeTruthy();
  });

  it("does not render connector when last", () => {
    const { container } = render(
      <TimelineItem date="2024" event="Event" isLast={true} />,
    );
    expect(container.querySelector(".bg-sky-200")).toBeNull();
  });
});
