import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const domain = process.env.REACT_APP_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = `${window.location.origin}/teacher`;

ReactDOM.render(
  <Auth0Provider domain={domain} clientId={clientId} redirectUri={redirectUri}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,

  document.getElementById("root")
);
