import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import process from 'process';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = process.env.AUTH0_DOMAIN;
const clientId = process.env.AUTH0_CLIENT_ID;

createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>,

)
