import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "@app/auth/auth.service";
import { Observable } from "rxjs";
import { StoreModel } from "@app/models/store.model";
@Injectable({
  providedIn: "root"
})
export class StoreService {
  private api: string = environment.api_server + "/api";
  constructor(private _http: HttpClient, private _auth: AuthService) {}
  private request(
    method: string,
    endpoint: string,
    body?: any
  ): Observable<any> {
    const url = `${this.api}/${endpoint}`;
    return this._http.request(method, url, {
      body,
      headers: { authorization: `Bearer ${this._auth.token}` }
    });
  }
  getBranchs(page?: string): Observable<StoreModel> {
    const endpoint = page ? `branchs/page=${page}` : "branchs";
    return this.request("GET", endpoint);
  }
}
