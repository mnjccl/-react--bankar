import { useEffect, useMemo, useRef } from "react";

import { UpperClouds } from "./Clouds";
import { Card } from "./Card";

const aboutCards = [
  {
    img: "digital-bank-img",
    heading: "24/7 dostupnost",
    text: "Nema više čekanja u dugim redovima ispred banke. Otvori račun u Bankar aplikaciji i upravljaj svojim finansijama od kuće.",
  },
  {
    img: "security-img",
    heading: "Sigurnost",
    text: "Svakim danom naša zajedica postaje sve veća i veća. Zato je za vašu sigurnost zadužen poseban tim stručnjaka koji brinu o vama.",
  },
  {
    img: "debit-card-img",
    heading: "Kreditna kartica",
    text: "Nema potrebe da gomilate novac u vašim džepovima kada sve to može da zamijeni jedna kartica koju dobijate nakon što postanete naš član.",
  },
  {
    img: "e-mail-img",
    heading: "E-mail obavještenja",
    text: "Kako bi bili 100% sigurni da samo vi upravljate vašim nalogom dobijaćete potvrde o transakcijama u obliku e-maila.",
  },
];

export default function About() {
  const cards = useRef<HTMLDivElement[]>([]);
  const trigger = useMemo(() => {
    return (window.innerHeight / 6) * 4;
  }, []);

  function animateCard() {
    cards.current.forEach((card) => {
      const top = card.getBoundingClientRect().top;
      if (top < trigger) {
        card.classList.add("show");
      } else {
        card.classList.remove("show");
      }
    });
  }

  useEffect(() => {
    cards.current = Array.from(
      document.querySelectorAll<HTMLDivElement>(".card")
    );
    window.addEventListener("scroll", animateCard);
    return () => {
      window.removeEventListener("scroll", animateCard);
    };
  });

  return (
    <>
      <UpperClouds />
      <section className="about flex-column" id="o-nama">
        <div className="heading-wrapper">
          <h6 className="heading--secondary">O nama</h6>
          <h1 className="heading--primary">
            Koristite naše usluge u bilo koje vrijeme na bilo kojem mjestu.
          </h1>
        </div>

        <div className="about--content">
          {aboutCards.map((card, index) => (
            <Card
              key={index}
              img={card.img}
              heading={card.heading}
              text={card.text}
            />
          ))}
        </div>
      </section>
    </>
  );
}
