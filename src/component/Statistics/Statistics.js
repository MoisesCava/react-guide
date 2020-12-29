import React from "react";
import AmountStatistics from "./AmountStatistics/AmountStatistics";
import DateStatistics from "./DateStatistics/DateStatistics";
import HighestEntryCurrency from "./HighestEntryCurrency/HighestEntryCurrency";
import OperatorHighSales from "./OperatorHighSales/OperatorHighSales";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const Statistics = (props) => {
  return (
    <div>
      <h1>Estadísticas</h1>

      <Tabs>
        <TabList>
          <Tab>Fechas</Tab>
          <Tab>Montos</Tab>
          <Tab>Operador Mayor</Tab>
          <Tab>Moneda</Tab>
        </TabList>
        <TabPanel>
          <DateStatistics />
        </TabPanel>
        <TabPanel>
          <AmountStatistics />
        </TabPanel>
        <TabPanel>
            <OperatorHighSales />
        </TabPanel>
        <TabPanel>
            <HighestEntryCurrency />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Statistics;
