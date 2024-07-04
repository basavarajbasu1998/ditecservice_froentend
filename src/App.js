import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Router from "./routes";

import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import ThemeProvider from "./theme";
import CircularLoading from "./utils/CircularLoading";
import NetworkAlert from "./utils/dialogs/NetworkAlert";
import SessionExpireDialog from "./utils/dialogs/SessionExpireDialog";
import Token from "./utils/token/Token";
import { Typography } from "@mui/material";
import ThemePointer from "./utils/fontsize/ThemePointer";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemePointer />
        <ThemeProvider>
          <ScrollToTop />
          <NetworkAlert />
          <Token />
          <SessionExpireDialog />
          <Suspense fallback={<CircularLoading />}>
            <Router />
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
