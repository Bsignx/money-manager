import type { NextPage } from "next";

import { MoneyManagerTemplate } from "../components/money-manager";
import { useMoneyManagerStore } from "../store";

const MoneyManager: NextPage = () => {
  const {} = useMoneyManagerStore();

  return <MoneyManagerTemplate />;
};

export default MoneyManager;
