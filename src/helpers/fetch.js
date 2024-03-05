import { API_KEY, BASE_URL } from "../api";
import axios from "axios";

async function Getdata(path) {
  try {
    const response = await axios.get(`${BASE_URL}${path}?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log("Error", error);
  }
}

export default Getdata;
