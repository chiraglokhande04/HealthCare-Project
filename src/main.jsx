import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
const queryClient = new QueryClient();

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <App />
  </QueryClientProvider>

)
