import React from "react";
import Navbar from "./Component/Navbar";
import Main from "./Component/Main";
import ExpensesView from "./Component/ExpensesView";
import { ChartContextProvider } from "./Context/ChartContext";

export default function ExpenceTracker() {
  return (
    <div>
      <ChartContextProvider>
        <Navbar />
        <Main />
        <ExpensesView />
      </ChartContextProvider>
    </div>
  );
}
