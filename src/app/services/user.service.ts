import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { User } from "../models/user";
import { apiUrl } from "../constants/api";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  currentUser: User;

  getAll() {
    return this.http.get(apiUrl + "/user/all");
  }

  //   getById(id: number) {
  //     return this.http.get("/api/user/");
  //   }

  register(user: User) {
    return this.http.post(apiUrl + "/user/signup", user, {
      responseType: "text"
    });
  }

  login(userEmail: string, userPassword: string) {
    return this.http.post(apiUrl + "/signin", {
      email: userEmail,
      password: userPassword
    });
  }

  update(user: User) {
    return this.http.put(apiUrl + "/user/update/" + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(apiUrl + "/user/delete/" + id);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  setCurrentUser(user: User) {
    console.log("Current user data: \n");
    console.log(user);
    this.currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    console.log(JSON.parse(localStorage.getItem("currentUser")));
    console.log(this.currentUser);
  }

  updateRole(user: User, role: string) {
    return this.http.put(
      apiUrl + "/user/update/role/" + user.id + "/" + role,
      {},
      {
        responseType: "text"
      }
    );
  }

  removeUser(user: User) {
    return this.http.delete(apiUrl + "/user/delete/" + user.id, {
      responseType: "text"
    });
  }
}
