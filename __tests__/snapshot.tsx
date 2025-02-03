import { render,screen } from '@testing-library/react'
import LandingPage from '../src/pages/home'
import React from 'react'
 

test("renders homepage", () => {
  render(<LandingPage />);
  expect(screen.getByText("Welcome to Next.js 15!")).toBeInTheDocument();
});