import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import React, { useEffect, useMemo, useState } from "react";
import Data from "../data.json";
import { Autocomplete, TextField } from "@mui/material";

type Person = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
};

function TableComponent() {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 100,
        Edit: ({ row }) => {
          return (
            <Autocomplete
              options={Data.map((option) => option.id)}
              autoComplete
              renderInput={(params) => <TextField {...params} label="State" />}
              onChange={(event, value) => {
                row._valuesCache["state"] = value;
              }}
            />
          );
        },
      },
      {
        accessorKey: "first_name",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "last_name",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 250,
      },
      {
        accessorKey: "gender",
        header: "Gender",
        size: 100,
      },
      {
        accessorKey: "ip_address",
        header: "IP Address",
        size: 150,
      },
    ],
    []
  );
  return (
    <div>
      <MaterialReactTable
        columns={columns}
        data={Data}
        enablePagination={true}
        muiTableProps={{
          sx: {
            borderSpacing: "10px",
            borderCollapse: "separate",
          },
        }}
        muiTableHeadRowProps={{
          sx: {
            boxShadow: "4px 0 8px rgba(0, 0, 0, 0)",
          },
        }}
        muiTableHeadCellProps={{
          sx: {
            background: "#C0AEF9",
            color: "#FAFAFC",
          },
          align: "center",
        }}
        muiTableBodyCellProps={{
          sx: {
            background: "#F7F7F8",
          },
          align: "center",
        }}
        enableColumnActions={false}
        enableEditing={true}
        editingMode="cell"
      />
    </div>
  );
}

export default TableComponent;
