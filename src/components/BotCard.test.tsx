import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BotCard } from "./BotCard";

const baseProps = {
  name: "Along",
  role: "Scheduling & Reminders",
  description: "Keeps your calendar in order.",
  avatar: "/avatar/along-avatar.png",
  color: "red" as const,
};

describe("BotCard", () => {
  it("renders bot name, role, and description", () => {
    render(<BotCard {...baseProps} status="online" />);
    expect(screen.getByText("Along")).toBeInTheDocument();
    expect(screen.getByText("Scheduling & Reminders")).toBeInTheDocument();
    expect(
      screen.getByText("Keeps your calendar in order."),
    ).toBeInTheDocument();
  });

  it("shows Online badge when status is online", () => {
    render(<BotCard {...baseProps} status="online" />);
    expect(screen.getByText("Online")).toBeInTheDocument();
  });

  it("shows Offline badge when status is offline", () => {
    render(<BotCard {...baseProps} status="offline" />);
    expect(screen.getByText("Offline")).toBeInTheDocument();
  });

  it("renders avatar image with correct src and alt", () => {
    render(<BotCard {...baseProps} status="online" />);
    const img = screen.getByAltText("Along");
    expect(img).toHaveAttribute("src", "/avatar/along-avatar.png");
  });
});
