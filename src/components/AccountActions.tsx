import { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  sendOutline,
  cloudDownloadOutline,
  personRemoveOutline,
} from "ionicons/icons";

import { AccountActionsProps } from "../types";
import SendMoney from "./SendMoney";
import TakeLoan from "./TakeLoan";
import DeleteAccount from "./DeleteAcount";

function AccountActions({
  user = { id: 0, email: "", username: "" },
  balance,
  setBalance,
  setTransactions,
  setInterestRate,
  interestRate,
  resetStates,
}: AccountActionsProps) {
  const [active, setActive] = useState(1);

  return (
    <div className="account-actions">
      <div className="actions flex-column">
        <IonIcon icon={sendOutline} onClick={() => setActive(1)} />
        <IonIcon icon={cloudDownloadOutline} onClick={() => setActive(2)} />
        <IonIcon icon={personRemoveOutline} onClick={() => setActive(3)} />
      </div>
      <div className="action-display flex-column">
        {active === 1 && (
          <SendMoney
            user={user}
            balance={balance}
            setBalance={setBalance}
            setTransactions={setTransactions}
          />
        )}
        {active === 2 && (
          <TakeLoan
            user={user}
            balance={balance}
            setBalance={setBalance}
            setTransactions={setTransactions}
            setInterestRate={setInterestRate}
            interestRate={interestRate}
          />
        )}
        {active === 3 && (
          <DeleteAccount
            user={user}
            interestRate={interestRate}
            balance={balance}
            resetStates={resetStates}
          />
        )}
      </div>
    </div>
  );
}

export default AccountActions;
