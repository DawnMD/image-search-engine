import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ONCkee_5wvu3cPqgTLATCOZHo4tOQOMQRtGq4YB3w2c",
  },
});
