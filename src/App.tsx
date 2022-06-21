import React, { useEffect } from "react";
import {
  IonApp,
  IonPage,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactHashRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const TestPage: React.FC = () => {
  useEffect(() => {
    console.log("MOUNTED");
    return () => {
      console.log("UNMOUTED");
    };
  }, []);
  return <IonPage>Hello</IonPage>;
};

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactHashRouter>
        <IonRouterOutlet>
          <Route path="/home" component={TestPage} />
          <Redirect exact from="/" to="/home" />
          {/* <Route
            path="/"
            exact
            render={() => {
              console.log(
                `Redirect ${window.location.pathname} => ${window.location}`
              );
              return <Redirect to="/home" />;
            }}
          /> */}
        </IonRouterOutlet>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;
