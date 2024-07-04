import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import React from "react";

const FormItems = ({ item, handleViewPDF, handleSubmitFile, openRemark }) => {
  return (
    <>
      <Box key={item.cid}>
        <Grid container spacing={2} mb={3}>
          <Grid item xs={6} md={6}>
            <Stack direction={"row"} spacing={3}>
              <Typography variant="body1">{item.id}</Typography>
              <Typography variant="body1">{item.formName}</Typography>
            </Stack>
          </Grid>

          <Grid
            item
            // xs={12}
            md={6}
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
            display={"flex"}
            wrap="nowrap"
          >
            <Stack direction={"row"} spacing={3} wrap="nowrap">
              <Typography
                color={
                  item.status === "Pending"
                    ? "#C3C300"
                    : item.status === "Accepted"
                    ? "green"
                    : "red"
                }
                variant="body1"
              >
                {item.status}
              </Typography>
              {!(item.status === "File not upload") && (
                <>
                  <Button
                    size="small"
                    startIcon={<PictureAsPdfIcon />}
                    onClick={() => handleViewPDF(item)}
                    // href={`${environmentalURL}/getpdffile/${}`}
                    variant="contained"
                  >
                    view
                  </Button>
                  <Stack direction={"row"} spacing={2}>
                    <Button
                      // loading={buttonLoading}
                      onClick={() => handleSubmitFile("Accept", item.formId)}
                      size="small"
                      color="success"
                      variant="contained"
                      disabled={item.status === "Accepted" ? true : false}
                    >
                      Accept
                    </Button>

                    <Button
                      size="small"
                      onClick={() => openRemark(item)}
                      color="error"
                      variant="contained"
                    >
                      Reject
                    </Button>
                  </Stack>
                </>
              )}
            </Stack>
          </Grid>
        </Grid>
        <Box sx={{ mb: 1.5 }}>
          <Divider flexItem />
        </Box>
      </Box>
    </>
  );
};

export default FormItems;
