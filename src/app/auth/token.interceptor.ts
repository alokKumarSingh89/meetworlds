import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import {AuthService} from './auth.service'
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    constructor(private _auth:AuthService){}
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders:{
                Authorization: `Bearer ${this._auth.token}`
            }
        })

        return next.handle(req);
    }
}