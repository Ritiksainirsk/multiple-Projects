import React, { useContext, useEffect } from "react";
import ChartSummary from "./ChartSummary.jsx";
import { ChartGlobelContext } from "../Context/ChartContext.jsx";

export default function Main() {
  const {
    totalExpenses,
    settotalExpenses,
    totalIncome,
    settotalIncome,
    allTransaction,
  } = useContext(ChartGlobelContext);


  useEffect(()=>{
    let income = 0
    let expense = 0;

    allTransaction.forEach(item => {
        item.type === "income" ? income = income + parseFloat( item.amount) : expense = expense + parseFloat(item.amount)      
    });

    settotalIncome(income)
    settotalExpenses(expense)

  },[allTransaction])

  return (
    <div className="grid grid-cols-2 gap-3 m-4 my-8">
      <div className="bg-[#f6f6f6fb] flex gap-6 flex-col items-center text-center py-5">
        <p className="font-bold">Balance is {totalIncome - totalExpenses}</p>
        <div>
          <h1 className="font-bold text-[27px]">$ {totalIncome}</h1>
          <p>Total Income</p>
        </div>
        <div>
          <h1 className="font-bold text-[27px]">$ {totalExpenses}</h1>
          <p>Total Expenses</p>
        </div>
      </div>

      <div className="bg-[#f6f6f6fb] text-center font-bold text-[30px]">
        <ChartSummary expense={totalExpenses} income={totalIncome} />
      </div>
    </div>
  );
}
