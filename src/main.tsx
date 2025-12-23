import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './index.css';
import App from './App.tsx';
import { TeamInfoPage } from './TeamInfo.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/team" element={<TeamInfoPage />} />
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          duration: 2200,
          style: {
            padding: '12px 16px',
            borderRadius: '14px',
            background: '#0f172a',
            color: '#f8fafc',
            fontSize: '14px',
            fontWeight: 500,
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.15), 0 8px 10px -6px rgba(0,0,0,0.15)',
          },
          success: {
            iconTheme: { primary: '#22c55e', secondary: '#ecfdf5' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#fef2f2' },
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>,
);
