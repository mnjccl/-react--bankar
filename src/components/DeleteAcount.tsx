import { useState } from "react";
import axios from "axios";

import { DeleteAccountProps } from "../types";

export default function DeleteAccount({
  user,
  interestRate,
  balance,
  resetStates,
}: DeleteAccountProps) {
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password) {
      alert(
        "Molimo da unesete lozinku kako bi ste potvrdili brisanje naloga. 😑"
      );
      return;
    }

    if (balance < interestRate) {
      alert(
        "Vaš nalog ne može biti ugašen dok imate manje novca na računu od iznosa kamate. 🤔"
      );
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local",
        {
          identifier: user.email,
          password,
        }
      );

      if (response.status === 200) {
        await axios.delete(`http://localhost:1337/api/users/${user.id}`);
        resetStates();
      }
    } catch (err: any) {
      if (err.response?.status === 400) {
        setPassword("");
        alert("Pogriješili ste lozinku. Pokušajte ponovo. 🥲");
      } else {
        console.error(err);
      }
    }
  };

  return (
    <>
      <h3 className="heading--action">Obriši nalog</h3>
      <form className="action-form flex-column" onSubmit={handleSubmit}>
        <div className="flex-column">
          <label htmlFor="lozinka">Lozinka</label>
          <input
            id="lozinka"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn--action">
          Potvrdi
        </button>
      </form>
    </>
  );
}
