import Header from "./Header";
import hero from "./imgs/hero-img.png";
import korisnik1 from "./imgs/korisnici/korisnik-1.jpg";
import korisnik2 from "./imgs/korisnici/korisnik-2.jpg";
import korisnik3 from "./imgs/korisnici/korisnik-3.jpg";
import korisnik4 from "./imgs/korisnici/korisnik-4.jpg";
import korisnik5 from "./imgs/korisnici/korisnik-5.jpg";

export default function Hero({
  setIsOpenOverlay,
}: {
  setIsOpenOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <Header setIsOpenOverlay={setIsOpenOverlay} />
      <section className="hero-section">
        <div className="hero-wrapper hero-left-wrapper">
          <div className="hero-content">
            <h1 className="heading-hero">
              <strong>Registruj se</strong> i vrši transfer novca
              <strong> bilo gdje</strong>.
            </h1>
            <p>
              Najbolja domaća online platforma za digitalno bankarstvo. Sa nama
              se osjećate kao kod kuće.
            </p>
            <div className="hero-btns">
              <a href="#otvori-nalog" className="btn btn-start">
                Započni odmah
              </a>
              <a href="#o-nama" className="btn btn-learn-more">
                Saznaj više &darr;
              </a>
            </div>
          </div>
        </div>
        <div className="hero-wrapper">
          <img src={hero} alt="Mobile banking" className="hero-img" />
        </div>
        <div className="korisnici-wrapper">
          <div className="korisnici">
            <img src={korisnik1} alt="Slika korisnika" />
            <img src={korisnik2} alt="Slika korisnika" />
            <img src={korisnik3} alt="Slika korisnika" />
            <img src={korisnik4} alt="Slika korisnika" />
            <img src={korisnik5} alt="Slika korisnika" />
          </div>
          <p>
            <strong>10,000+</strong> zadovoljnih korisnika
          </p>
        </div>
      </section>
    </>
  );
}
