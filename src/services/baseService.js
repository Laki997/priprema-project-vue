import axios from "axios";

class BaseService {
  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:8000/api",
    });

    this.client.interceptors.request.use(function(request) {
      const token = JSON.parse(localStorage.getItem("token"));

      if (token) {
        request.headers["Authorization"] = `Beared ${token}`;
      }

      return request;
    });
  }
}

export default BaseService;
