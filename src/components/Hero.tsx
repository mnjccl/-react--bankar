import Header from "./Header";
import hero from "./imgs/hero-img.png";
import user1 from "./imgs/users/user-1.jpg";
import user2 from "./imgs/users/user-2.jpg";
import user3 from "./imgs/users/user-3.jpg";
import user4 from "./imgs/users/user-4.jpg";
import user5 from "./imgs/users/user-5.jpg";

export default function Hero({
  setIsOpenOverlay,
}: {
  setIsOpenOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <Header setIsOpenOverlay={setIsOpenOverlay} />
      <section className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1 className="heading--hero">
              <strong>Registruj se</strong> i vrši transfer novca
              <strong> bilo gdje</strong>.
            </h1>
            <p>
              Najbolja domaća online platforma za digitalno bankarstvo. Sa nama
              se osjećate kao kod kuće.
            </p>
            <div className="hero-btns">
              <a href="#otvori-nalog" className="btn btn--start">
                Započni odmah
              </a>
              <a href="#o-nama" className="btn btn--learn-more">
                Saznaj više &darr;
              </a>
            </div>
          </div>
        </div>
        <div className="hero-wrapper">
          <img src={hero} alt="Mobile banking" className="hero-img" />
        </div>
        <div className="users-wrapper">
          <div className="users-images">
            <img src={user1} alt="Slika korisnika" />
            <img src={user2} alt="Slika korisnika" />
            <img src={user3} alt="Slika korisnika" />
            <img src={user4} alt="Slika korisnika" />
            <img src={user5} alt="Slika korisnika" />
          </div>
          <p>
            <strong>10,000+</strong> zadovoljnih korisnika
          </p>
        </div>
      </section>
    </>
  );
}
