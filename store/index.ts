import create from "zustand";
import { TRANSACTION_TYPE_OPTIONS } from "../constants";

type Transaction = {
  id: string;
  title: string;
  amount: number;
  type: "income" | "expense";
};

export const useMoneyManagerStore = create<{
  transactionsList: Transaction[] | [];
  titleInput: string;
  amountInput: string;
  optionId: string;
}>((set) => ({
  transactionsList: [],
  amountInput: "",
  titleInput: "",
  optionId: TRANSACTION_TYPE_OPTIONS[0].optionId,
  deleteTransaction: (id: string) =>
    set(({ transactionsList }) => ({
      transactionsList: transactionsList.filter(
        (transaction) => transaction.id !== id
      ),
    })),
}));
