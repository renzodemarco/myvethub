import axios from 'axios';

export const wakeUpServer = async (data) => {
  try {
    await axios.get(import.meta.env.VITE_BACKEND_URL);
    return true;
  }
  catch (error) {
    return false
  }
};