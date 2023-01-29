import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //..nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("render paragraph", () => {
    render(<Greeting />);

    const paragraphElement = screen.getByText("It's good to see you!");
    expect(paragraphElement).toBeInTheDocument();
  });

  test("changed if the button was clicked", () => {
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const paragraphElement = screen.getByText("Changed!");
    expect(paragraphElement).toBeInTheDocument();
  });

  test("does not render good to see you if the button was clicked", () => {
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const paragraphElement = screen.queryByText("It's good to see you!");
    expect(paragraphElement).toBeNull();
  });
});
