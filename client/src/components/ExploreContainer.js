import React, { useEffect, useState } from "react";
import "./ExploreContainer.css";
import axios from "axios";

const handlSignIn = () => {
  const eventFunction = e => {
    window.localStorage.setItem("jwt", e.data);
    window.removeEventListener("message", eventFunction);
  };

  window.open("/auth/google");

  window.addEventListener("message", eventFunction);
};

const ExploreContainer = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/test");
      setResponse(data);
    })();
  }, []);

  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <div>Use /api/* routes to communicate with the server</div>
      <div>{response}</div>
      <div onClick={handlSignIn} style={{ color: "blue" }}>
        Sign IN
      </div>
    </div>
  );
};

export default ExploreContainer;
