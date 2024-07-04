import { Card, Container, Paper, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { subAUAgetData } from "../redux/admin/adminActions";
import { CLEAR_STATE } from "../redux/admin/adminConstants";
import { useState } from "react";

const columns = [
  { field: "id", headerName: "S.No", width: 90 },
  {
    field: "organisationName",
    headerName: "Organisation Name",
    width: 300,
  },
  {
    field: "managementEmail",
    headerName: "Email",
    width: 300,
  },
  {
    field: "createdDate",
    headerName: "Submitted Date",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      let cellStyle = { color: "black" }; // Default text color
      if (params.value === "Approved") {
        cellStyle.color = "green"; // Change text color for 'Approved' status
      } else if (params.value === "Rejected") {
        cellStyle.color = "red"; // Change text color for 'Rejected' status
      } else if (params.value === "Pending") {
        cellStyle.color = "#F7CB73"; // Change text color for 'Rejected' status
      }

      return <div style={cellStyle}>{params.value}</div>;
    },
  },
];

const PAGE_SIZE = 5;

const PendingSubaua = () => {
  const stateData = useSelector((state) => state.admin);

  console.log(stateData);

  const { buttonLoading, data } = stateData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(subAUAgetData());
  }, []);

  const handleSubmit = (params) => {
    dispatch({ type: CLEAR_STATE });
    console.log(params.row);
    navigate("/ditec/admin/status", { state: { data: params.row.subAuaId } });
  };

  if (buttonLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <Container maxWidth={"xl"}>
        {data?.listData ? (
          // <Card sx={{ p: 2 }}>
          <Box sx={{ p: 1, height: 400, width: "100%" }}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              display={"flex"}
              my={2}
            >
              <Typography color={"#1B5886"} variant="h4">
                Sub-AUA
              </Typography>
            </Stack>
            <Paper sx={{ p: 2 }}>
              <DataGrid
                sx={{ cursor: "pointer" }}
                rows={data?.listData}
                columns={columns}
                onCellClick={handleSubmit}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[PAGE_SIZE]}
              />
            </Paper>
          </Box>
        ) : (
          // </Card>
          <>
            <Box
              sx={{
                mt: 5,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Typography variant="h4">No data found!</Typography>
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default PendingSubaua;
