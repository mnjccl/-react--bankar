import { useRef, useState } from "react";
import axios from "axios";

import { TakeLoanProps } from "../types";

export default function TakeLoan({
  user,
  setTransactions,
  setBalance,
  balance,
  interestRate,
  setInterestRate,
}: TakeLoanProps) {
  const [loan, setLoan] = useState<number>(0);
  const input = useRef<HTMLInputElement | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!loan) {
      alert("Molimo da unesete željeni iznos.");
      return;
    }

    try {
      await axios.post("http://localhost:1337/api/transactions", {
        data: { user_id: user.id, amount: loan, type: "loan" },
      });

      setTransactions((prev) => [
        ...prev,
        { user_id: user.id, amount: loan, type: "loan" },
      ]);

      setBalance(balance + loan);
      setInterestRate(interestRate + loan * 0.05);

      if (input.current) input.current.value = "";
      setLoan(0);
    } catch (err) {
      console.error(err);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLoan(Number(e.target.value));
  }

  return (
    <>
      <h3 className="action-heading">Digni pozajmicu</h3>
      <form className="action-form flex-column" onSubmit={handleSubmit}>
        <div className="flex-column">
          <label htmlFor="iznos">Iznos</label>
          <input
            id="iznos"
            type="number"
            ref={input}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-action">
          Podigni
        </button>
      </form>
    </>
  );
}
