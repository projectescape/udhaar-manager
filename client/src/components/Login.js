import React, { useContext } from "react";
import { logoGoogle } from "ionicons/icons";
import "./Login.css";
import { IonIcon, IonButton } from "@ionic/react";
import Context from "../context";
import { Redirect } from "react-router";

const ExploreContainer = () => {
  const { setJwt, profile } = useContext(Context);

  if (profile !== {}) return <Redirect to="/home" />;

  const handlSignIn = () => {
    const eventFunction = e => {
      window.localStorage.setItem("jwt", e.data);
      setJwt(e.data);
      window.removeEventListener("message", eventFunction);
    };

    window.open("/auth/google");

    window.addEventListener("message", eventFunction);
  };
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <div className="ion-margin-top">
        <IonButton onClick={handlSignIn} color="light">
          Sign In using Google
          <IonIcon icon={logoGoogle} slot="end" />
        </IonButton>
      </div>
    </div>
  );
};

export default ExploreContainer;
