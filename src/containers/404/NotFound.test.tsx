import { screen } from "@testing-library/react";

describe("Not Found Page", () => {
  test("Renders title", () => {
    expect(screen.getByRole("title")).toBeInTheDocument();
  });

  test("Renders subtitle", () => {
    expect(screen.getByRole("subtitle")).toBeInTheDocument();
  });

  test("Renders image", () => {
    expect(screen.getByRole("image")).toBeInTheDocument();
  });
});
