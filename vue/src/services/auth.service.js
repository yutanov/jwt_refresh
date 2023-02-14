// import axios from "axios";
import api from "./api";
import TokenService from "./token.service";

// import qs from 'qs';

class AuthService {
  login({ username, password }) {
    return api
      .post("/auth/signin", {
        username,
        password
      })
    .then((response) => {
      if (response.data.accessToken) {
        TokenService.setUser(response.data);
      }

      return response.data;
    });

    // const data = {
    //   grant_type: 'password',
    //   client_id: 'DEMO',
    //   username: 'test',
    //   password: '123qweASD',
    // };
    // const url = 'http://test.test/key/realms/SAT/protocol/openid-connect/token'
    // const request = {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //   data: qs.stringify(data),
    //   url,
    // };
    // return axios(request)
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .then((response) => {
    //     if (response.data.accessToken) {
    //       TokenService.setUser(response.data);
    //   }
    //     return response.data;
    //   });

    // return axios
    //   .post('http://test.test/key/realms/SAT/protocol/openid-connect/token',
    //   { "Content-Type": "application/x-www-form-urlencoded" },
    //   'grant_type=password&client_id=DEMO&username=test&password=123qweASD')
    //   .then((response) => {
    //     console.log(response)
    //   })

  }

  logout() {
    TokenService.removeUser();
  }

  register({ username, email, password }) {
    return api.post("/auth/signup", {
      username,
      email,
      password
    });
  }
}

export default new AuthService();
