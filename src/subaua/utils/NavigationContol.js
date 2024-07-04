import { Button, Stack, Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Invoice from "../paymentmechanism/invoice/Invoice";

const NavigationContol = ({
  path,
  disabled,
  tooltipMessage,
  submit,
  onClick,
  invoice,
}) => {
  const navigate = useNavigate();
  return (
    <Stack mt={2} direction={"row"} spacing={3} justifyContent={"flex-end"}>
      {invoice && <Invoice />}
      <Button
        startIcon={<ArrowBackIcon />}
        variant="contained"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>

      <Tooltip
        title={tooltipMessage}
        placement="top"
        arrow
        sx={{
          visibility: "visible", // Show the tooltip text even for disabled elements
          "&[data-popper]": {
            visibility: "visible", // Make the tooltip visible on hover
          },
        }}
      >
        <span>
          <Button
            endIcon={<ArrowForwardIcon />}
            disabled={disabled}
            variant="contained"
            onClick={onClick ? () => onClick() : () => navigate(path)}
          >
            {submit ? "Go" : "Next"}
          </Button>
        </span>
      </Tooltip>
    </Stack>
  );
};

export default NavigationContol;
