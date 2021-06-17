import baseService from "./baseService";

class AuthService extends baseService {
  async login(credentials) {
    const { data } = await this.client.post("/login", credentials);

    return data;
  }

  async register(user) {
    const { data } = await this.client.post("/register", user);

    return data;
  }

  logout() {
    this.client.post("/logout");
  }

  async getActiveUser() {
    const { data } = await this.client.get("/me");
    console.log(data);
    return data;
  }
}

const authService = new AuthService();
export default authService;
