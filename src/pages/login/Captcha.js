import React, { useEffect, useState } from "react";

import {
  Box,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";
import { Controller } from "react-hook-form";
import { generateRandomString } from "../../utils/formatTime";
import ImageOverlay from "./ImageOverlay";

const Captcha = ({
  register,
  errors,
  watch,
  control,
  setValue,
  refreshCaptchaOnSubmit,
}) => {
  const captchaLength = 6; // Adjust the length of the CAPTCHA string
  const [captcha, setCaptcha] = useState(generateRandomString(captchaLength));
  const [isValid, setIsValid] = useState(false);

  const validateCaptcha = (value) => {
    if (captcha === value) {
      setIsValid(true);
      return true;
    } else {
      setIsValid(false);
      return "Captcha not valid!";
    }
  };

  const regenerateCaptcha = () => {
    setCaptcha(generateRandomString(captchaLength));
    setIsValid(false);
    setValue("captcha", "");
  };
  useEffect(() => {
    if (refreshCaptchaOnSubmit) {
      regenerateCaptcha();
    }
  }, [refreshCaptchaOnSubmit]);

  return (
    <>
      {/* <Card elevation={0} sx={{ borderRadius: 0 }}>
        <CardContent> */}
      <Stack
        direction={"column"}
        //   alignItems={"center"}
        //   justifyContent={"center"}
        //   display={"flex"}

        mt={2}
        alignContent={"center"}
        spacing={2}
      >
        <Stack
          // spacing={4}
          p={1}
          bgcolor={"white"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Typography variant="subtitle2">Captcha</Typography>
          {/* <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url('/assets/images/captcha_bg.png')`, // Replace with your image path
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              textAlign: "center",
              padding: 1,
            }}
            variant="h6"
          >
            {captcha}
          </Typography> */}
          <ImageOverlay
            imageUrl={"/assets/images/captcha_bg.png"}
            overlayText={captcha}
          />
          <IconButton onClick={regenerateCaptcha}>
            <RefreshIcon />
          </IconButton>
        </Stack>
        <Stack direction={"column"}>
          <FormControl fullWidth>
            <Controller
              name="captcha"
              control={control}
              defaultValue=""
              rules={{
                required: "Captcha required!",
                validate: validateCaptcha,
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  type="text"
                  // label="Captcha"
                  placeholder="Please type the code above"
                />
              )}
            />
          </FormControl>
          {errors.captcha && (
            <FormHelperText error>{errors.captcha.message}</FormHelperText>
          )}
          {isValid && (
            <FormHelperText sx={{ color: "green" }}>
              Captcha valid!
            </FormHelperText>
          )}
        </Stack>
      </Stack>
      {/* </CardContent>
      </Card> */}
    </>
  );
};

export default Captcha;
