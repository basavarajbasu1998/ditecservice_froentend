import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import DownloadIcon from "@mui/icons-material/Download";

import { Logger } from "logging-library";
import FileViewer from "react-file-viewer";
import { CustomErrorComponent } from "custom-error";

import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { Box, Paper } from "@mui/material";

import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

// Set the workerSrc option
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const type = "pdf";

export default function ViewPDF({ open, href, handleClose, fileName }) {
  const [numPages, setNumPages] = React.useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  return (
    <>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        maxWidth={"xl"}

        // PaperProps={{
        //   style: {
        //     maxWidth: "xl",
        //     width: "100%",
        //   },
        // }}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {fileName}
            </Typography>
            <Button
              autoFocus
              startIcon={<DownloadIcon />}
              color="inherit"
              href={href}
            >
              Download
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            bgcolor: "lightgray",
          }}
        >
          <div
            style={{
              height: "600px",
              width: "100%",
              marginTop: 5,
              marginBottom: 5,
              marginLeft: "25%",
              marginRight: "25%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FileViewer
              fileType={type}
              filePath={href}
              errorComponent={CustomErrorComponent}
            />
          </div>
        </Box>
      </Dialog>
    </>
  );
}
