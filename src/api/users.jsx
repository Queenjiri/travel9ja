import axios from "axios";

export const SignupUser = async (userData) => {
  console.log(userData);
  try {
    const response = await axios.post(
      `https://travul9ja.onrender.com/api/v1/users`,
      userData,
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const LoginUser = async (userData) => {
  try {
    const response = await axios.post(
      `https://travul9ja.onrender.com/api/v1/users/login`,
      userData,
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(
      `https://travul9ja.onrender.com/api/v1/users`,
      {
        headers: {
          // if you are sending a file type replace with multipart/form-data, else if it is string, then leave it like this.
          "Content-Type": "application/json",
          // put your user token here, either from localstorage or redux/usecontext store
          // Authorization: `Bearer ${token}`,
        },
      },
    );
    return response;
  } catch (error) {
    return error;
  }
};

