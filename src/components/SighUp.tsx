import Form from "./SignUpForm";

export default function SignUp() {
  return (
    <section className="sign-up flex-column" id="otvori-nalog">
      <div className="heading-wrapper">
        <h6 className="heading--secondary">Napravi nalog</h6>
        <h1 className="heading--primary">
          Postani naš član još danas i iskoristi pogodnosti koje nudimo.
        </h1>
      </div>
      <div className="sign-up--content">
        <div className="sign-up--text-box flex-column">
          <h2 className="sign-up--heading">Besplatno se učlani!</h2>
          <p className="sign-up--description">
            Dozvoljeno starijima od 18 godina. Šalji novac prijateljima, uzimaj
            pozajmice bilo kad i bilo gdje uz<strong> kamatnu stopu </strong> od
            samo <strong>5%</strong>.
          </p>
          <Form />
        </div>
        <div
          className="sign-up--img"
          role="img"
          aria-label="Zadovoljna korisnica Bankar aplikacije"
        ></div>
      </div>
    </section>
  );
}
