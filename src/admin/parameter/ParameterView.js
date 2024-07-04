import { Box, Button, Card, Container, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useNavigate } from "react-router-dom";

const ParameterView = () => {
  const navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "S.No", width: 90 },
    {
      field: "date",
      headerName: "Date",
      width: 300,
    },
    {
      field: "parameterName",
      headerName: "Parameter Name",
      width: 300,
    },
    {
      field: "parameterValue",
      headerName: "Parameter Value",
      width: 300,
    },
  ];

  const rows = [
    {
      id: 1,
      parameterName: "Skill Development",
      parameterValue: "missiondirector.asdm@gmail.com",
      date: "06-05-2023",
    },
    {
      id: 2,
      parameterName: "Civil Supplies",
      parameterValue: "cefcsassam@gmail.comrsei",
      date: "25-05-2023",
    },
    {
      id: 3,
      parameterName: "Panchayat Raj & Rural Development",
      parameterValue: "panchayatraj@gmail.com",
      date: "15-06-2023",
    },
  ];

  const handleSubmit = (params) => {
    // console.log(params);
    navigate("/ditec/admin/addparameter", { state: { data: params.row } });
  };
  return (
    <>
      <Container maxWidth={"xl"}>
        <Stack my={2} direction={"row"} justifyContent={"flex-end"}>
          <Button
            onClick={() => navigate("/ditec/admin/addparameter")}
            startIcon={<ControlPointIcon />}
            variant="contained"
          >
            Add new
          </Button>
        </Stack>
        <Card sx={{ p: 2 }}>
          <Box sx={{ p: 1, height: 400, width: "100%" }}>
            <DataGrid
              sx={{ cursor: "pointer" }}
              rows={rows}
              columns={columns}
              onCellClick={handleSubmit}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
            />
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default ParameterView;
