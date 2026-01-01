import axios from "axios";
import { useEffect } from "react";

import Report from "./Report";
import { AccountReportsProps, Transaction } from "../types";

function AccountReports({
  id,
  transactions,
  setTransactions,
}: AccountReportsProps) {
  const url = "http://localhost:1337/api/transactions";

  useEffect(() => {
    const ucitajTransakcije = async () => {
      try {
        const response = await axios.get(url);
        const { data } = response.data as {
          data: { attributes: Transaction }[];
        };
        setTransactions(
          data
            .map(({ attributes }) => attributes)
            .filter((transaction) => transaction.user_id === id)
        );
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    ucitajTransakcije();
  }, [id, setTransactions]);

  const reverseTransactions = [...transactions].reverse();

  return (
    <div className="account-reports">
      <div className="reports">
        {reverseTransactions?.map((transaction, index) => (
          <Report key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}

export default AccountReports;
