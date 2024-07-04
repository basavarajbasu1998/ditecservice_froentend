import Cookies from "js-cookie";
import { decryptData, encryptData } from "../encryption/EncryptDecript";

const expirationTimeInMinutes = 20;
const expirationTimeInSeconds = expirationTimeInMinutes * 60;

// Calculate the expiration date
const expirationDate = new Date(Date.now() + expirationTimeInSeconds * 1000);

export const setCookies = (key, obj) => {
  try {
    Cookies.set(key, encryptData(obj), {
      // expires: expirationDate,
      expires: 57867575775,
    });
  } catch (err) {}
};

export const getCookies = (key, defaultValue) => {
  try {
    const serializableState = Cookies.get(key);

    console.log("cookies data", serializableState);

    if (serializableState === null) {
      return defaultValue;
    }

    // const stateData = JSON.parse(serializableState);

    return decryptData(serializableState);
  } catch (error) {
    return defaultValue;
  }
};
