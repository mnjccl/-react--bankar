import instagram from "./imgs/drustvene-mreze/logo-instagram.png";
import facebook from "./imgs/drustvene-mreze/logo-facebook.png";
import twitter from "./imgs/drustvene-mreze/logo-twitter.png";
import linkedin from "./imgs/drustvene-mreze/logo-linkedin.png";
import logo from "./imgs/logo.png";

export default function Footer({
  setIsOpenOverlay,
}: {
  setIsOpenOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <footer className="footer" id="footer">
      <div className="footer--container">
        <div className="flex-column">
          <h2 className="heading--footer">
            Olakšajte sebi svakodnevnicu. Najbolji trenutak za pridruživanje
            našoj porodici je upravo sada.
          </h2>
          <div className="footer--btn-wrapper">
            <a href="#otvori-nalog">
              <button className="btn btn--footer">Učlani se besplatno</button>
            </a>
          </div>
        </div>

        <div className="flex-column" id="kontaktirajte-nas">
          <div className="footer--socials">
            <div>
              <img
                src={instagram}
                alt="Instagram logo"
                className="footer--logo"
              />
            </div>
            <div>
              <img
                src={facebook}
                alt="Facebook logo"
                className="footer--logo"
              />
            </div>
            <div>
              <img src={twitter} alt="Twitter logo" className="footer--logo" />
            </div>
            <div>
              <img
                src={linkedin}
                alt="LinkedIn logo"
                className="footer--logo"
              />
            </div>
          </div>

          <nav className="footer--nav">
            <ul className="footer--nav-list">
              <li>
                <a href="#o-nama" className="footer--nav-link">
                  O nama
                </a>
              </li>
              <li>
                <a href="#features" className="footer--nav-link">
                  Funkcionalnosti
                </a>
              </li>
              <li>
                <a href="#otvori-nalog" className="footer--nav-link">
                  Otvori nalog
                </a>
              </li>
              <li>
                <span
                  className="footer--nav-link"
                  onClick={() => setIsOpenOverlay(true)}
                >
                  Uloguj se
                </span>
              </li>
            </ul>
          </nav>
        </div>

        <div className="banner">
          <img
            src={logo}
            alt="Logo Bankar komanije"
            className="banner--logo"
            onClick={() => window.scrollTo(0, 0)}
          />
        </div>
      </div>
    </footer>
  );
}
