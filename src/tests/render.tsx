import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from '../hooks/useAuth';
import { ReactNode } from 'react';


export const renderWithProviders = (children: ReactNode) =>
  render(
    <UserContextProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </UserContextProvider>
  );

