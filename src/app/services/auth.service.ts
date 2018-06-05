import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { apiUrl } from "../constants/api";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  login(userEmail: string, userPassword: string) {
    return this.http.post(
      apiUrl + "/signin",
      {
        email: userEmail,
        password: userPassword
      },
      {
        observe: "response"
      }
    );
  }

  isAuthenticated() {
    var currentUser = this.userService.getCurrentUser();
    //console.log(Object.keys(currentUser).length != 0);
    return currentUser != null;
  }
}
