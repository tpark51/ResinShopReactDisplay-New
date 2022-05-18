import React from "react";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

import CustomTable from "../../Layouts/Table";

function ViewDashboard() {
  const [reportList, setReport] = useState();

  useEffect(() => {
    fetch("https://localhost:7143/api/reports/large-order")
      .then((data) => data.json())
      .then((data) => setReport(data));
  }, []);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <CustomTable>
        <TableHead>
          <TableRow>
            <TableCell>Order No.</TableCell>
            <TableCell>Quote No.</TableCell>
            <TableCell>Customer First Name</TableCell>
            <TableCell>Customer Last Name</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reportList.map((item) => (
            <TableRow key={item.orderId}>
              <TableCell>{item.orderId}</TableCell>
              <TableCell>{item.artId}</TableCell>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
    </div>
  );
}

export default ViewDashboard;
