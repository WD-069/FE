import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from './App.js';
import BookingContextProvider from './contexts/BookingContext.js';
import ThemeContextProvider from './contexts/ThemeContextProvider.js';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <BookingContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </BookingContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
