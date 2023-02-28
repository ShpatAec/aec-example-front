import axios from "axios";

const API_URL = "https://dev-env-aec-user-api.azuremicroservices.io/auth/";

export const register = (name: string, email: string, password: string) => {
  return axios.post(
    API_URL + "register",
    {
      name,
      email,
      password,
    },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};

export const login = (email: string, password: string) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  const user = getCurrentUser();
  if (user && user.token) {
    axios
      .post(
        API_URL + "logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);

  return null;
};