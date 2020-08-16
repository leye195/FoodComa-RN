import AsyncStorage from "@react-native-community/async-storage";

const AUTH_TOKEN = "AUTH_TOKEN";
let token;

export const getToken = async () => {
  try {
    if (token) {
      return Promise.resolve(token);
    }
    token = await AsyncStorage.getItem(AUTH_TOKEN);
    return token;
  } catch (e) {
    console.log(e);
    return token;
  }
};

export const signIn = (newToken) => {
  token = newToken;
  return AsyncStorage.setItem(AUTH_TOKEN, newToken);
};

export const signOut = () => {
  token = undefined;
  return AsyncStorage.removeItem(AUTH_TOKEN);
};

export const getImage = (path, defaultImage = "") => {
  if (!path) return defaultImage;
  return path;
};
