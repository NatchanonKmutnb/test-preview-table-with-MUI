import React from "react";
import TableComponent from "../components/TableComponent";
import { AppBar, Box, Button, Tab, Tabs } from "@mui/material";

function PreviewTablePage() {
  const [value, setValue] = React.useState("one");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="p-4 flex justify-end">
        <Button className="text-white bg-success">Generate Excel</Button>
      </div>
      <div className="shadow-lg">
        <Tabs
          value={value}
          onChange={handleChange}
          className="flex flex-grow"
          variant="fullWidth"
          sx={{
            boxShadow: "1px 1px 5px #CACACB",
            "& button": { height: "60px", boxShadow: "1px 2px 5px #CACACB" },
            "& button:hover": { backgroundColor: "#E6E0F9" },
            "& button:focus": { backgroundColor: "#4E2A81", color: "white" },
            "& .Mui-selected": {
              backgroundColor: "#4E2A81", // Customize the selected tab background color
              color: "white", // Customize the selected tab text color
            },
          }}
          TabIndicatorProps={{
            style: {
              display: "none", // Hide the indicator by setting display to "none"
            },
          }}
        >
          <Tab value="one" label="Appiclation Details" />
          <Tab value="two" label="Blackduck" />
          <Tab value="three" label="Converity" />
          <Tab value="four" label="Aquasec" />
        </Tabs>
      </div>
      <div className="py-7">
        <TableComponent />
      </div>
    </div>
  );
}

export default PreviewTablePage;
