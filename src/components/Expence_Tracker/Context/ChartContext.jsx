import { createContext, useState } from "react";

export const ChartGlobelContext = createContext();

export const ChartContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  });

  const [totalExpenses, settotalExpenses] = useState(0);
  const [totalIncome, settotalIncome] = useState(0);
  const [allTransaction, setallTransaction] = useState([]);

  const HandleFormSubmit = (currentFormData)=>{
    console.log(currentFormData)
    if(!currentFormData.description || !currentFormData.amount) return;

    setallTransaction([
      ...allTransaction,
      {...currentFormData,id:Date.now()},
    ])
  }

  return (
    <ChartGlobelContext.Provider
      value={{
        totalExpenses,
        settotalExpenses,
        totalExpenses,
        settotalExpenses,
        totalIncome,
        settotalIncome,
        allTransaction,
        setallTransaction,
        formData,
        setFormData,
        HandleFormSubmit
      }}
    >
      {children}
    </ChartGlobelContext.Provider>
  );
};
