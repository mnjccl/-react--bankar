import {
  cloudDownloadOutline,
  personRemoveOutline,
  sendOutline,
} from "ionicons/icons";

import { LowerClouds } from "./Clouds";
import Feature from "./Feature";

const data = [
  {
    icon: sendOutline,
    heading: "Pošalji novac",
    text: "Želiš da pošalješ novac prijatelju? Nema problema, posluži se bankomatom koji je u tvom telefonu, čak i vikendom.",
  },
  {
    icon: cloudDownloadOutline,
    heading: "Digni pozajmicu",
    text: "Potreban ti je novac odmah? Nema problema, uloguj se i digni pozajmicu uz kamatnu stopu od samo 1.1%.",
  },
  {
    icon: personRemoveOutline,
    heading: "Obriši nalog",
    text: "Želiš da obrišeš nalog? Nema problema, mi poslujemo bez ugovornih obaveza, samo pazi da tvoj račun nije u deficitu.",
  },
];

export default function Features() {
  return (
    <>
      <section className="features-section" id="features">
        <div className="heading-wrapper">
          <h6 className="heading--secondary">Funkcionalnosti</h6>
          <h1 className="heading--primary">
            Posjeduj sve što nude najsavremenije banke potpuno besplatno.
          </h1>
        </div>
        <div className="features">
          {data.map((feat) => (
            <Feature object={feat} key={feat.heading} />
          ))}
        </div>
      </section>
      <LowerClouds />
    </>
  );
}
