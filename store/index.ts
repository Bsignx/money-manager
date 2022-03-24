import create from "zustand";
import { TRANSACTION_TYPE_OPTIONS } from "../constants";

export type Transaction = {
  id: string;
  title: string;
  amount: number;
  type: string;
};

type MoneyManagerStore = {
  transactionsList: Transaction[] | [];
  titleInput: string;
  amountInput: string;
  optionId: string;
  addTransaction: (transaction: Transaction, optionId: string) => void;
  deleteTransaction: (id: string) => void;
  updateOptionId: (id: string) => void;
  updateAmountInput: (amountInput: string) => void;
  updateTitleInput: (titleInput: string) => void;
  getExpenseTotal: () => number;
  getIncomeTotal: () => number;
  getBalance: () => number;
};

export const useMoneyManagerStore = create<MoneyManagerStore>((set, get) => ({
  transactionsList: [],
  amountInput: "",
  titleInput: "",
  optionId: TRANSACTION_TYPE_OPTIONS[0].optionId,

  addTransaction: (transaction: Transaction, optionId: string) =>
    set(({ transactionsList }) => ({
      transactionsList: [...transactionsList, transaction],
      optionId,
    })),
  deleteTransaction: (id: string) =>
    set(({ transactionsList }) => ({
      transactionsList: transactionsList.filter(
        (transaction) => transaction.id !== id
      ),
    })),
  updateOptionId: (optionId: string) => set(() => ({ optionId })),
  updateAmountInput: (amountInput: string) => set(() => ({ amountInput })),
  updateTitleInput: (titleInput: string) => set(() => ({ titleInput })),
  getExpenseTotal: () => {
    const expenseTotal = get()
      .transactionsList.filter((transaction) => transaction.type === "expense")
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    return expenseTotal;
  },
  getIncomeTotal: () => {
    const incomeTotal = get()
      .transactionsList.filter((transaction) => transaction.type === "income")
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    return incomeTotal;
  },
  getBalance: () => {
    const expenseTotal = get().getExpenseTotal();
    const incomeTotal = get().getIncomeTotal();

    return incomeTotal - expenseTotal;
  },
}));
