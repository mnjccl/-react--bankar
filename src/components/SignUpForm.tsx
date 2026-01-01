import { useReducer, useRef } from "react";
import axios from "axios";

import { age } from "../helpers";

type FormState = {
  username: string;
  birthday: string;
  gender: "Z" | "M";
  email: string;
  password: string;
};

type Action =
  | { type: "saveName"; payload: string }
  | { type: "saveBirthday"; payload: string }
  | { type: "saveGender"; payload: "Z" | "M" }
  | { type: "saveEmail"; payload: string }
  | { type: "savePassword"; payload: string }
  | { type: "reset" };

const InitialState: FormState = {
  username: "",
  birthday: "",
  gender: "Z",
  email: "",
  password: "",
};

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "saveName":
      return { ...state, username: action.payload };
    case "saveBirthday":
      return { ...state, birthday: action.payload };
    case "saveGender":
      return { ...state, gender: action.payload };
    case "saveEmail":
      return { ...state, email: action.payload };
    case "savePassword":
      return { ...state, password: action.payload };
    case "reset":
      return InitialState;
    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, InitialState);

  const inputs = useRef<NodeListOf<HTMLInputElement> | null>(null);
  inputs.current = document.querySelectorAll("input");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const godine = age(new Date(state.birthday));
    if (godine < 18) {
      alert("Morate biti stariji od 18 godina da biste se registrovali. 😁");
      return;
    }

    const url = "http://localhost:1337/api/auth/local/register";

    try {
      const response = await axios.post(url, state);

      if (response.status === 400)
        throw new Error("E-mail ili lozinka su zauzeti. Probajte ponovo. 🚫");

      if (response.status === 200)
        alert(
          "Čestitamo! Uspješno ste otvorili vaš račun. Sada se prijavite u aplikaciju i transferujte vaš novac bilo gdje! 🌍"
        );

      inputs.current?.forEach((input) => (input.value = ""));
    } catch (err: unknown) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Greška!");
      inputs.current?.forEach((input) => (input.value = ""));
    }
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <div className="flex-column">
        <label htmlFor="ime">Ime i prezime</label>
        <input
          type="text"
          id="ime"
          placeholder="Marija Petrovic"
          autoComplete="name"
          onChange={(e) =>
            dispatch({ type: "saveName", payload: e.target.value })
          }
          required
        />
      </div>

      <div className="flex-column">
        <label htmlFor="rodjendan">Datum rodjenja</label>
        <input
          id="rodjendan"
          type="date"
          autoComplete="bday"
          onChange={(e) =>
            dispatch({ type: "saveBirthday", payload: e.target.value })
          }
          required
        />
      </div>

      <div className="flex-column">
        <label htmlFor="pol">Pol</label>
        <select
          id="pol"
          autoComplete="sex"
          onChange={(e) =>
            dispatch({
              type: "saveGender",
              payload: e.target.value as "Z" | "M",
            })
          }
          required
        >
          <option value="Z">Žensko</option>
          <option value="M">Muško</option>
        </select>
      </div>

      <div className="flex-column">
        <label htmlFor="e-mail">E-mail adresa</label>
        <input
          type="email"
          id="e-mail"
          placeholder="marija@primjer.com"
          autoComplete="email"
          onChange={(e) =>
            dispatch({ type: "saveEmail", payload: e.target.value })
          }
          required
        />
      </div>

      <div className="flex-column">
        <label htmlFor="sifra">Šifra</label>
        <input
          type="password"
          id="sifra"
          placeholder="12345678"
          min={8}
          autoComplete="new-password"
          onChange={(e) =>
            dispatch({ type: "savePassword", payload: e.target.value })
          }
          required
        />
      </div>

      <button className="btn btn-form btn-sign-up">Napravi nalog</button>
    </form>
  );
}

export default Form;
