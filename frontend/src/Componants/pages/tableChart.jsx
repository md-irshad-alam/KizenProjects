import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function LeadTableInfo({ rowData }) {
  return (
    <TableContainer className="max-h-[330px] overflow-x-scroll">
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Source</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData?.map((l, i) => (
            <TableRow hover tabIndex={-1} key={i}>
              <TableCell component="th" scope="row">
                {l.name}
              </TableCell>
              <TableCell>{l.email}</TableCell>
              <TableCell>{l.source}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
