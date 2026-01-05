import { Transaction } from "../types";

export default function Report({ transaction }: { transaction: Transaction }) {
  const transactionAmount = transaction.amount;
  const positiveTransaction = transaction.amount > 0;
  return (
    <div className="report">
      <span
        className={`report--type ${
          positiveTransaction ? "report--type-in" : "report--type-out"
        }`}
      >
        {positiveTransaction ? "Uplaceno" : "Isplaceno"}
      </span>
      <span className="report--amount">{transactionAmount} RSD</span>
    </div>
  );
}
