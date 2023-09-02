import axios from "axios";
const URL = "http://localhost:8000/api";

export const sendDetails = async (form) => {
  try {
    const response = await axios.post(`${URL}/forms/`, form);
    console.log(response?.data, "data");
  } catch (error) {}
};
