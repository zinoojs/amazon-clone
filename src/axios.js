import axios from "axios";

const instance = axios.create({
  //   baseURL: "http://localhost:5001/one-9f27a/us-central1/apil",
  baseURL: "https://us-central1-one-9f27a.cloudfunctions.net/api",
});
export default instance;
// http://localhost:5001/one-9f27a/us-central1/api
