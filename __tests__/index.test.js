import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { GreetEverybody, Hello, Hola, Bonjour } from "../src/index";

afterEach(cleanup);

it("displays all greetings", () => {
  const { asFragment } = render(<GreetEverybody />);
  expect(asFragment()).toMatchSnapshot();
});

it("displays hello", () => {
  const { getByTestId } = render(<GreetEverybody />);
  expect(getByTestId('theroot')).toHaveTextContent('Hello');
});