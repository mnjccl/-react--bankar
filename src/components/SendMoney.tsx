import { useState } from "react";
import axios from "axios";

import { SendMoneyProps } from "../types";

export default function SendMoney({
  user,
  balance,
  setBalance,
  setTransactions,
}: SendMoneyProps) {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<number | "">("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !amount) {
      alert("Molimo popunite prazna polja. 🙎");
      return;
    }

    if (amount <= 0) {
      alert("Iznos mora biti veći od nule. 😁");
      return;
    }

    if (amount > balance) {
      alert("Nemate dovoljno sredstava na računu. 🙃");
      return;
    }

    try {
      const response = await axios.get("http://localhost:1337/api/users");

      const acceptor = response.data.find(
        (u: { id: number; email: string }) => u.email === email
      );

      if (!acceptor) {
        alert(
          "Korisnik sa navedenom e-mail adresom ne postoji. Pokušajte ponovo. 🔄️"
        );
        return;
      }

      await axios.post("http://localhost:1337/api/transactions", {
        data: { user_id: user.id, amount: -amount, type: "transfer" },
      });

      await axios.post("http://localhost:1337/api/transactions", {
        data: { user_id: acceptor.id, amount, type: "transfer" },
      });

      setBalance(balance - amount);
      setTransactions((prev) => [
        ...prev,
        { user_id: user.id, amount: -amount },
      ]);

      setEmail("");
      setAmount("");
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Došlo je do greške. ❌");
    }
  }

  return (
    <>
      <h3 className="action-heading">Pošalji novac prijatelju</h3>
      <form className="action-form flex-column" onSubmit={handleSubmit}>
        <div className="flex-column">
          <label htmlFor="korisnik">E-mail korisnika</label>
          <input
            type="email"
            id="korisnik"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex-column">
          <label htmlFor="amount">Iznos</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <button type="submit" className="btn btn-action">
          Pošalji
        </button>
      </form>
    </>
  );
}
