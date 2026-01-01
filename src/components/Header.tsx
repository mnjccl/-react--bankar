import logo from "./imgs/logo.png";

export default function Header({
  setIsOpenOverlay,
}: {
  setIsOpenOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header className="header">
      <div className="banner">
        <img src={logo} alt="Logo kompanije Bankar" className="banner-logo" />
        <h1 className="banner-text">Bankar</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#o-nama" className="nav-link">
              O nama
            </a>
          </li>
          <li>
            <a href="#features" className="nav-link">
              Funkcionalnosti
            </a>
          </li>
          <li>
            <a href="#otvori-nalog" className="nav-link">
              Otvori nalog
            </a>
          </li>
          <li>
            <button
              className="btn nav-link-btn"
              onClick={() => setIsOpenOverlay(true)}
            >
              Uloguj se
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
