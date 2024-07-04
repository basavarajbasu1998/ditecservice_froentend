export const loadState = (key, defaultValue) => {
  try {
    const serializableState = sessionStorage.getItem(key);

    if (serializableState === null) {
      return defaultValue;
    }

    const stateData = JSON.parse(serializableState);

    return stateData;
  } catch (error) {
    return defaultValue;
  }
};

export const saveState = (key, obj) => {
  try {
    const serializableState = JSON.stringify(obj);
    sessionStorage.setItem(key, serializableState);
  } catch (error) {
    // Handle any errors
  }
};
