import { Tabs, Tab } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import TabPanel from "./TabPanel";

function InnerTabs(props) {
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
                    aria-label="basic tabs example"
                >
                    <Tab label="Customer" />
                    <Tab label="Retailer" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {props.table}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {props.table1}
            </TabPanel>
            <TabPanel value={value} index={0}>
                {props.table2}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {props.table3}
            </TabPanel>

        </Box>
    );
}

export default InnerTabs;
