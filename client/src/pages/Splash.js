import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Login from "../components/Login";

const Home = () => {
  return (
    <IonPage>
      <IonContent>
        <Login />
      </IonContent>
    </IonPage>
  );
};

export default Home;
