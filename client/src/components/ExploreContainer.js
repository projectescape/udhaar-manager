import React, { useEffect, useState } from "react";
import "./ExploreContainer.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ExploreContainer = () => {
  const [response, setResponse] = useState("");
  let history = useHistory();

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
      <div
        onClick={() => {
          const loginWindow = window.open("/auth/google");

          window.addEventListener("message", e => {
            console.log(e.origin);
          });
        }}
      >
        {/* <a href="/auth/google"> */}
        Sign IN
        {/* </a> */}
      </div>
    </div>
  );
};

export default ExploreContainer;
