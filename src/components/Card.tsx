import { CardProps } from "../types";

export function Card(props: CardProps) {
  return (
    <div className={`card ${props.img}`}>
      <div className="card--description flex-column">
        <h3 className="card--heading">{props.heading}</h3>
        <p className="card--text">{props.text}</p>
        <a href="#otvori-nalog" className="card--link">
          Napravi nalog &darr;
        </a>
      </div>
    </div>
  );
}
