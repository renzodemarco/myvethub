import { jwtDecode } from 'jwt-decode';

const getTokenInfo = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp > currentTime) {
      return decodedToken;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export default getTokenInfo