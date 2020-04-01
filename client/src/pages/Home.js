import React from "react";
import Header from "../components/Header";
import { IonContent, IonPage } from "@ionic/react";

const Home = () => {
  console.log("Hello");

  return (
    <IonPage>
      <Header title="Home" />
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{" "}
          <a
            target="_blank"
            rel="noopener"
            href="https://ionicframework.com/docs/"
          >
            docs
          </a>{" "}
          will be your guide.
        </p>
      </IonContent>{" "}
    </IonPage>
  );
};

export default Home;
