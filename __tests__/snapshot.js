import { render } from '@testing-library/react'
import LandingPage from '../src/app/page.tsx'
 
it('renders homepage unchanged', () => {
  const { container } = render(<LandingPage />)
  expect(container).toMatchSnapshot()
})