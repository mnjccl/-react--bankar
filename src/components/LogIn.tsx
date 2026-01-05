import { useState, useRef } from "react";
import axios from "axios";

import logo from "./imgs/logo.png";
import { User } from "../types";

type LogInProps = {
  setUser: (user: User) => void;
};

export default function LogIn({ setUser }: LogInProps) {
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");

  const inputs = useRef<NodeListOf<HTMLInputElement> | null>(null);
  inputs.current = document.querySelectorAll("input");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "http://localhost:1337/api/auth/local";

    if (inputPassword && inputEmail) {
      try {
        const response = await axios.post(url, {
          identifier: inputEmail,
          password: inputPassword,
        });

        if (response.status === 200) setUser(response.data.user);
      } catch (err: unknown) {
        console.error(err);
        if (axios.isAxiosError(err) && err.response?.status === 400) {
          alert(
            "Korisnik sa navedenim podacima ne postoji. Molimo pokušajte ponovo."
          );
        } else {
          alert(
            "Došlo je do greške prilikom prijave. Molimo pokušajte ponovo."
          );
        }
      }
    } else {
      alert("Molimo da unesete tražene podatke.");
    }

    inputs.current?.forEach((input) => (input.value = ""));
  };

  return (
    <div className="log-in flex-column">
      <div className="banner">
        <img src={logo} alt="Logo kompanije Bankar" className="banner--logo" />
      </div>
      <form className="log-in--form" onSubmit={handleSubmit}>
        <div className="flex-column">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </div>
        <div className="flex-column">
          <label htmlFor="password">Lozinka</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn--form btn--log-in">
          Uloguj se
        </button>
      </form>
    </div>
  );
}
