import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private _auth: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log("event", event);
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) {
                console.log('error',err)
            }
          }
        }
      )
    );
  }
}
