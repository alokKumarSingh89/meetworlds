import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@env/environment";
import { AuthType, UserDTO } from "@app/models/auth.model";
import { Observable } from "rxjs";
import { User } from "@app/models/user.model";
@Injectable()
export class AuthService {
  private storage_name: string = "dashboard";
  private api: string = environment.api_server+'/auth';
  constructor(private _http: HttpClient) {}

  private auth(authType:AuthType,data:UserDTO) {
    return this._http.post(`${this.api}/${authType}`,data);
  }
  get token() {
    return localStorage.getItem(this.storage_name);
  }
  set token(value: string) {
    if (value) {
      localStorage.setItem(this.storage_name, value);
    } else if(value == "clear"){
      localStorage.clear();
    }
  }
  login(data:UserDTO) {
    return this.auth('login',data);
  }
  registration(data:UserDTO) {
    return this.auth('registraion',data);
  }
  whoami():Observable<any>{
    return this._http.get(`${this.api}/whoami`,{headers:{authorization:`Bearer ${this.token}`}
    })
  }
  logOut(){
    localStorage.clear();
    return true;
  }
}
