import React, { useState, useEffect } from "react";
import MarkDown from "markdown-to-jsx";
import { useAuth0 } from "@auth0/auth0-react";
//import Card from "./Card";
//import { posts } from "../../data";
import "./Home.css"

const Home = () => {
   const { loginWithRedirect, isAuthenticated, logout} = useAuth0();
  const [landing, setLanding] = useState("");
  const file_name = "landing.md";

  useEffect(() => {
    import(`../../markdown/${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setLanding(res));
      })
      .catch((error) => console.log(error.message));
  });

  return (
    <>
      {/* <div className="home">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div> */}
      {/* {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <button onClick={() => logout({returnTo:window.location.origin})}>Logout</button>
      )} */}
<p>secret: {process.env.REACT_APP_CLIENT_ID}</p>
      <div className="showcase">
        <div className="container">
          <h1>Islington Centre for Refugees and Migrants</h1>
          <p className="lead hide-on-small">
            Welcoming and supporting Refugees, Asylum seekers, and migrants in
            our community
          </p>
        </div>
      </div>
      <div className="home-content">
        <MarkDown>{landing}</MarkDown>
      </div>
    </>
  );
};

export default Home;
