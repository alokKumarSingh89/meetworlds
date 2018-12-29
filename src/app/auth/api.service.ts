import { Injectable } from "@angular/core";
import { environment } from "@env/environment.prod";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "@app/auth/auth.service";
import { Observable } from "rxjs";
import { User } from "@app/interface/user";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private api: string = environment.api_server + "/api";
  constructor(private _http: HttpClient, private _auth: AuthService) {}

  private request(
    method: string,
    endpoint: string,
    body?: any
  ): Observable<any> {
    const url = `${this.api}/${endpoint}`;
    return this._http.request(method, url, { body });
  }

  getUsers(page?: string): Observable<User[]> {
    const endpoint = page ? `users/page=${page}` : "users";
    return this.request("GET", endpoint);
  }
  getUser(email: string): Observable<User> {
    return this.request("GET", `users/${email}`);
  }
  create(url, data, isMultipartForm?): Observable<any> {
    if (isMultipartForm) {
      let form = new FormData();
      for (let item in data) {
        if (data[item]) {
          form.append(item, data[item]);
        }
      }
      return this.request("POST", url, form);
    }
    return this.request("POST", url, data);
  }
  index(url): Observable<any> {
    return this.request("GET", url);
  }
  update(url, data, isMultipartForm?): Observable<any> {
    if (isMultipartForm) {
      let form = new FormData();
      for (let item in data) {
        if (data[item]) {
          form.append(item, data[item]);
        }
      }
      return this.request("PUT", url, form);
    }
    return this.request("PUT", url, data);
  }
  delete(url) {
    return this.request("DELETE", url);
  }
}
