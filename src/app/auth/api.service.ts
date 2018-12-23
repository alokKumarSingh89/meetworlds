import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@app/auth/auth.service';
import { Observable } from 'rxjs';
import { User } from '@app/interface/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api:string = environment.api_server+'/api'
  constructor(private _http:HttpClient,private _auth:AuthService) { }

  private request(method:string,endpoint:string,body?:any):Observable<any>{
    const url = `${this.api}/${endpoint}`;
    return this._http.request(method,url,{body,headers:{authorization:`Bearer ${this._auth.token}`}})
  }

  getUsers(page?:string):Observable<User[]>{
    const endpoint = page?`users/page=${page}`:'users';
    return this.request('GET',endpoint);
  }
  getUser(email:string):Observable<User>{
    return this.request('GET',`users/${email}`);
  }
  create(data):Observable<any>{
    let form = new FormData();
    for(let item in data){
      if(data[item]){
        form.append(item,data[item])
      }
    }
    return this.request('POST',`organisation/create`,form);
    // return this._http.post(`${this.api}/organisation/create`,{body:data});
  }
  index(url):Observable<any>{
    return this.request("GET",url);
  }
  update(url,data):Observable<any>{
    let form = new FormData();
    for(let item in data){
      if(data[item]){
        form.append(item,data[item])
      }
    }
    return this.request('PUT',url,form);
  }
  delete(url){
    return this.request("DELETE",url)
  }

}
