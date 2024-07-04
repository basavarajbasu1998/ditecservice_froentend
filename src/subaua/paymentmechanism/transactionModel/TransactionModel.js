import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadState } from "../../../helper/SessionStorage";
import { subauaData } from "../../../redux/admin/adminActions";
import { paymentModeSelection } from "../../../redux/subaua/subauaAction";
import { SUB_AUA_CLEAR_STATE } from "../../../redux/subaua/subauaConstant";
import CircularLoading from "../../../utils/CircularLoading";
import TickIcon from "../../../utils/animatedIcons/TickIcon";
import AlertDialog from "../../../utils/dialogs/AlertDialog";
import NavigationContol from "../../utils/NavigationContol";
import TransactionModelForm from "./TransactionModelForm";

const TransactionModel = () => {
  const stateData = useSelector((state) => state.admin);
  const stateDataSubaua = useSelector((state) => state.subaua);
  const { buttonLoading, auaData } = stateData;
  const { doneStatus, transactionModelAmount } = stateDataSubaua;

  console.log("auadatata", auaData);

  const retrievedValue = loadState("subauaid", "Default Value");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [alertContent, setAlertContent] = useState({
    open: false,
    title: "Success",
    content: "Data has been successfully submitted",
    icon: <TickIcon />,
    notice: "",
  });

  const handleAlertClose = () => {
    dispatch({ type: SUB_AUA_CLEAR_STATE });
    setAlertContent((old) => ({ ...old, open: false }));
    navigate("/ditec/subaua/profile");
  };

  useEffect(() => {
    console.count("calling for retrive Dataa");
    const data = {
      subAuaId: retrievedValue,
    };
    dispatch(subauaData(data));
  }, []);

  useEffect(() => {
    console.count("calling for done status");
    if (doneStatus.code == 1000) {
      setAlertContent((old) => ({ ...old, open: true }));
    }
  }, [doneStatus]);

  const onSubmitForGo = () => {
    setAlertContent({
      open: true,
      title: "Success",
      content:
        "The entire process was completed, and our technical team communicate you by mail and phone. Thank you!",
      notice: "Onboarding verification is in process",
      icon: <TickIcon />,
    });
  };

  if (buttonLoading === true) {
    return <CircularLoading />;
  }

  return (
    <>
      <Container maxWidth="xl">
        {/* <BackButton /> */}
        <Stack my={3} direction={"column"} spacing={3}>
          <Typography variant="h5">Transaction Models</Typography>
        </Stack>

        <TransactionModelForm auaData={auaData} />

        <NavigationContol
          // path={"/ditec/subaua/modeoftransaction"}
          onClick={onSubmitForGo}
          submit={true}
          disabled={auaData?.navigateStatus ? false : true}
          invoice={true}
        />

        <AlertDialog
          open={alertContent.open}
          handleClose={handleAlertClose}
          title={alertContent.title}
          content={alertContent.content}
          icon={alertContent.icon}
          notice={alertContent.notice}
          width={"xs"}
        />
      </Container>
    </>
  );
};

export default TransactionModel;
