// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import { Hero } from "@/components/sections/hero";
import { siteConfig } from "@/lib/config/site";
import { render, screen } from "@testing-library/react";

describe("Hero Section", () => {
  it("should render the main title with JuegoTenis", () => {
    render(<Hero />);

    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/Somos.*JuegoTenis/i);
  });

  it("should render the subtitle text", () => {
    render(<Hero />);

    const subtitle = screen.getByText(
      /Clases de tenis dinámicas y divertidas en Buenos Aires/i
    );
    expect(subtitle).toBeInTheDocument();
  });

  it('should render "Anotate acá" button with correct WhatsApp link', () => {
    render(<Hero />);

    const button = screen.getByRole("link", { name: /Anotate acá/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", siteConfig.links.whatsapp);
    expect(button).toHaveAttribute("target", "_blank");
    expect(button).toHaveAttribute("rel", "noopener noreferrer");
  });

  it('should render "Hablemos" button with correct anchor link', () => {
    render(<Hero />);

    const button = screen.getByRole("link", { name: /Hablemos/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "#quienes-somos");
  });

  it("should have proper accessibility attributes", () => {
    render(<Hero />);

    const section = document.querySelector("section");
    expect(section).toBeInTheDocument();
  });
});
