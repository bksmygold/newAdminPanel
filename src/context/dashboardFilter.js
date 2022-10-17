import React, { createContext, useMemo, useContext } from "react";
import dayjs from "dayjs";
export const DashboardFilterContext = createContext();

const DashboardFilterProvider = ({ children }) => {

  const [fromDate, setFromDate] = React.useState(dayjs().startOf("month").toDate());
  const [toDate, setToDate] = React.useState(dayjs().toDate());

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
