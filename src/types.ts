export type User = {
  id: number;
  email: string;
  username: string;
};

export type Transaction = {
  user_id: number;
  amount: number;
  type?: string;
};

export type AccountInfoProps = {
  user: User;
  transactions: Transaction[];
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  interestRate: number;
  setInterestRate: React.Dispatch<React.SetStateAction<number>>;
};

export type CardProps = {
  img: string;
  heading: string;
  text: string;
};

export type FeatureObject = {
  icon: string;
  heading: string;
  text: string;
};

export type TakeLoanProps = {
  user: User;
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
  interestRate: number;
  setInterestRate: React.Dispatch<React.SetStateAction<number>>;
};

export type SendMoneyProps = {
  user: User;
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
};

export type DeleteAccountProps = {
  user: User;
  interestRate: number;
  balance: number;
  resetStates: () => void;
};

export type AccountActionsProps = {
  user?: User;
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
  setInterestRate: React.Dispatch<React.SetStateAction<number>>;
  interestRate: number;
  resetStates: () => void;
};

export type BankarProps = {
  user: User;
  resetStates: () => void;
};

export type AccountReportsProps = {
  id: number;
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
};
