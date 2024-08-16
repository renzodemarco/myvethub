import axios from 'axios';
import serverError from './serverError';

export const postLoginUser = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`, data);
    return response.data;
  }
  catch (error) {
    if (error.response) {
      return { error: true, ...error.response };
    } else {
      return serverError();
    }
  }
};

export const postRegisterUser = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`, data);

    return response.data;
  }
  catch (error) {
    if (error.response) {
      return { error: true, ...error.response };
    } else {
      return serverError();
    }
  }
};
