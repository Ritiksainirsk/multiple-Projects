import React, { useContext } from "react";
import { ChartGlobelContext } from "../Context/ChartContext";

export default function ExpensesView() {
  const { allTransaction } = useContext(ChartGlobelContext);
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 bg-[#f6f6f6]">
        <div className="text-center font-bold">
          <h1>Income</h1>
          <div className="px-3">
            {allTransaction.map((item) => {
              return (
                <>
                  <h1 className="bg-green-500 text-white mt-1">
                    {item.type === "income" && (
                      <div className="flex justify-between px-4 py-1 items-center gap-3">
                        <p>{item.description} : </p>
                        <span>$ {item.amount}</span>
                      </div>
                    )}
                  </h1>
                </>
              );
            })}
          </div>
        </div>
        <div className="border-l-[1px] border-gray-400 text-center font-bold ">
          <h1> Expenses</h1>
          <div className="px-3">
            {allTransaction.map((item) => {
              return (
                <>
                  <h1 className="bg-[#008ffb] text-white mt-1">
                    {item.type === "expense" && (
                      <div className="flex justify-between px-4 py-1 items-center gap-3">
                        <p>{item.description} : </p>
                        <span>$ {item.amount}</span>
                      </div>
                    )}
                  </h1>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
