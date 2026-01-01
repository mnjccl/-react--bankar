import { IonIcon } from "@ionic/react";

import { FeatureObject } from "../types";

export default function Feature({ object }: { object: FeatureObject }) {
  return (
    <div className="feature flex-column">
      <IonIcon name={object.icon}></IonIcon>
      <h3 className="feature-heading">{object.heading}</h3>
      <p className="feature-text">{object.text}</p>
    </div>
  );
}
