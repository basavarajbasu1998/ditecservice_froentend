import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  saAllDocumentsView,
  saDeleteDocuments,
} from "../../../redux/superadmin/superAdminAction";
import AlertDialog from "../../../utils/dialogs/AlertDialog";
import TickIcon from "../../../utils/animatedIcons/TickIcon";

const SADocumentMaster = () => {
  const StateData = useSelector((state) => state.superadmin);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { documentsAllData, doneStatus } = StateData;

  const [rows, setRows] = useState([]);

  const [alertContent, setAlertContent] = useState({
    open: false,
    content: "",
    icon: null,
    title: "",
    data: {},
  });

  useEffect(() => {
    dispatch(saAllDocumentsView());
  }, []);

  useEffect(() => {
    setRows(documentsAllData);
  }, [documentsAllData]);

  useEffect(() => {
    if (doneStatus.code === 1000) {
      setAlertContent((old) => ({
        ...old,
        open: true,
        title: "Success",
        content: `Your data deleted successfully!`,
        icon: <TickIcon />,
      }));
    }
  }, [doneStatus]);

  const handleSubmit = (params) => {
    console.log(params);
    navigate("/ditec/superadmin/documentmasteradd", {
      state: { data: params.row },
    });
  };

  const handleDelete = (params) => {
    console.log(params);
    setAlertContent((old) => ({
      ...old,
      open: true,
      content: `Do you want to Delete ${params.certfacteMasterTitle}?`,
      data: params.id,
    }));
  };

  const handleAlertSubmit = (data) => {
    console.log("parant", data);
    const sendData = {
      id: data,
    };
    const updatedDocumentsAllData = rows.filter((x) => x.id !== data);
    console.log(updatedDocumentsAllData);
    setRows(updatedDocumentsAllData);
    dispatch(saDeleteDocuments(sendData));
    setAlertContent((old) => ({
      ...old,
      open: false,
      content: "",
      icon: null,
      title: "",
      data: {},
    }));
  };

  const handleAlertClose = () => {
    setAlertContent((old) => ({
      ...old,
      open: false,
      content: "",
      icon: null,
      title: "",
      data: {},
    }));
  };

  const columns = [
    { field: "id", headerName: "S.No", width: 150 },
    {
      field: "certfacteMasterTitle",
      headerName: "Title",
      width: 300,
    },
    {
      field: "createdDate",
      headerName: "Date",
      width: 300,
    },
    {
      field: "actions", // A custom field to hold the action buttons
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <>
          <Stack direction={"row"} spacing={2}>
            <Button
              variant="contained"
              color="info"
              onClick={() => handleSubmit(params)}
            >
              Update
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(params.row)}
            >
              Delete
            </Button>
          </Stack>
        </>
      ),
    },
  ];

  return (
    <>
      <Container maxWidth={"xl"}>
        <Stack my={2} direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h4">Document Master</Typography>
          <Button
            onClick={() => navigate("/ditec/superadmin/documentmasteradd")}
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
              key={Math.random(1236)}
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
      <AlertDialog
        open={alertContent.open}
        handleClose={handleAlertSubmit}
        handleOnlyClose={alertContent.icon ? null : handleAlertClose}
        icon={alertContent.icon}
        title={alertContent.title ? alertContent.title : null}
        content={alertContent.content ? alertContent.content : null}
        data={alertContent.data ? alertContent.data : null}
        width={"xs"}
      />
    </>
  );
};

export default SADocumentMaster;
