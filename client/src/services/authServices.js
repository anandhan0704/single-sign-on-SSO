import axios from "axios";

const register = (name, email, password) => {
  return axios.post(`${process.env.REACT_APP_BASE_URL}` + "user/signup", { name, email, password });
};
const login = (email, password) => {
  return axios
    .post(`${process.env.REACT_APP_BASE_URL}` + "user/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    })
    .catch((err) => {
      return err.response;
    });
};

export default { register, login};