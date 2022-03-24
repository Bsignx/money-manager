import type { NextPage } from "next";

import { MoneyManagerTemplate } from "../components/money-manager";
import { useMoneyManagerStore } from "../store";

const MoneyManager: NextPage = () => {
  return <MoneyManagerTemplate />;
};

export default MoneyManager;
