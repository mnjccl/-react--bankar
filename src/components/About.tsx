import { useEffect, useMemo, useRef } from "react";

import { UpperClouds } from "./Clouds";
import { Card } from "./Card";

const aboutCards = [
  {
    img: "digital-bank-img",
    heading: "24/7 dostupnost",
    text: "Upravljaj svojim finansijama online, bez čekanja i redova.",
  },
  {
    img: "security-img",
    heading: "Sigurnost",
    text: "Tvoj nalog je zaštićen uz pomoć našeg stručnog tima.",
  },
  {
    img: "debit-card-img",
    heading: "Kreditna kartica",
    text: "Kartica za lako i sigurno plaćanje bez gotovine.",
  },
  {
    img: "e-mail-img",
    heading: "E-mail obavještenja",
    text: "Dobijaš potvrde o svakoj transakciji putem e-maila.",
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
