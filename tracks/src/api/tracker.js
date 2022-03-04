import axios from "axios";

export default axios.create({
  baseURL: "http://ngrok.something.io",
});
