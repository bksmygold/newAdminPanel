import React, { createContext, useMemo, useContext } from "react";

export const DashboardFilterContext = createContext();

const DashboardFilterProvider = ({ children }) => {

  const [fromDate, setFromDate] = React.useState("03/10/2022");
  const [toDate, setToDate] = React.useState("04/12/2022");

  const value = useMemo(
    () => ({
      fromDate,
      setFromDate,
      toDate,
      setToDate
    }), [fromDate, toDate])

  return (
    <DashboardFilterContext.Provider value={value}>
      {children}
    </DashboardFilterContext.Provider>
  );
};

export const useDashboardFilter = () => {
  const context = useContext(DashboardFilterContext)
  if (!context) throw new Error("useDashboardFilter must be used inside DashboardFilterProvider")
  return context
}

export default DashboardFilterProvider;
