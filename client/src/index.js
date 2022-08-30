import React from "react";
import ReactDOM from "react-dom";
import { Auth0ProviderWithHistory } from "./Auth0ProviderWithHistory";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const domain = process.env.REACT_APP_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = window.location.origin;

ReactDOM.render(
  <Auth0Provider domain={domain} clientId={clientId} redirectUri={redirectUri}>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </Auth0Provider>,

  document.getElementById("root")
);
