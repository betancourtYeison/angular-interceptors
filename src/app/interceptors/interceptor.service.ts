import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("InterceptorService");
    const headers = new HttpHeaders({
      "x-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJBRE1JTl9ST0xFIiwiZ29vZ2xlIjpmYWxzZSwiX2lkIjoiNWQzYTBlODYyYTVjMmRlYzNlMTYwOTQ0IiwibmFtZSI6IlllaXNvbiBCZXRhbm91cnQgU29saXMiLCJlbWFpbCI6InllaXNvbmJlMTBAaG90bWFpbC5jb20iLCJwYXNzd29yZCI6IjopIiwiX192IjowLCJpbWciOiI1ZDNhMGU4NjJhNWMyZGVjM2UxNjA5NDQtOTc4LnBuZyJ9LCJpYXQiOjE1NjQyNjIyNzQsImV4cCI6MTU2NDI3NjY3NH0.gfedEmGPV8g3NQQzBU9fg99c3ugiCO-PBJ5A8xj7_Fs"
    });
    const reqClone = req.clone({ headers });
    return next.handle(reqClone).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.error("Interceptor Error: ", error);
    return throwError(error);
  }
}
