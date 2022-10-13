import { Tabs, Tab } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import TabPanel from "./TabPanel";
import InnerTabs from "./innerTab";

function OuterTabs(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example">
                    <Tab label="To Merchant" />
                    <Tab label="By Merchant" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <InnerTabs table={props.table} table1={props.table1} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <InnerTabs table2={props.table2} table3={props.table3} />
            </TabPanel>
        </Box>
    );
}

export default OuterTabs;
