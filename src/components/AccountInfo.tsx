import { useState, useEffect, useRef } from "react";

import { AccountInfoProps } from "../types";
import { clientName, Now } from "../helpers";

function AccountInfo({
  user,
  transactions,
  balance,
  setBalance,
  interestRate,
  setInterestRate,
}: AccountInfoProps) {
  const [moneyIn, setMoneyIn] = useState(0);
  const [moneyOut, setMoneyOut] = useState(0);
  let time = useRef("");

  useEffect(() => {
    let balance = 0;
    let moneyIn = 0;
    let moneyOut = 0;
    let interestRate = 0;

    transactions.forEach(function (transaction) {
      const transactionAmount = transaction.amount;
      if (transactionAmount > 0) {
        balance += transactionAmount;
      } else {
        balance -= Math.abs(transactionAmount);
      }
    });

    transactions.forEach(function (transaction) {
      const transactionAmount = transaction.amount;
      if (transactionAmount > 0) {
        moneyIn += transactionAmount;
      }
    });

    transactions.forEach(function (transaction) {
      const transactionAmount = transaction.amount;
      if (transactionAmount < 0) {
        moneyOut -= transactionAmount;
      }
    });

    transactions.forEach(function (transaction) {
      const transactionAmount = transaction.amount;
      if (transaction.type === "loan") {
        interestRate += (transactionAmount * 5) / 100;
      }
    });

    setBalance(balance);
    setMoneyIn(moneyIn);
    setMoneyOut(moneyOut);
    setInterestRate(interestRate);
    Now(time);
  }, [transactions, setBalance, setInterestRate]);

  return (
    <div className="account-info flex-column">
      <div>
        <h2 className="heading--app">
          Zdravo <strong>{clientName(user.username)}</strong>, uživaj koristeći
          naše usluge.
        </h2>
      </div>

      <div className="balance">
        <p>
          Dana <span>{time.current}</span>
        </p>
        <p>
          Stanje: <strong className="balance--amount">{balance} RSD</strong>
        </p>
      </div>
      <div className="summary">
        <p>
          Isplaćeno:{" "}
          <strong className="summary--money-out">{moneyOut} RSD</strong>
        </p>
        <p>
          Uplaćeno: <strong className="summary--money-in">{moneyIn} RSD</strong>
        </p>
        <p>
          Kamata:{" "}
          <strong className="summary--interest-rate">{interestRate} RSD</strong>
        </p>
      </div>
    </div>
  );
}

export default AccountInfo;
