import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  //   const authReq = req.clone({headers: req.headers.set('api_key', '9k6CKzf54J3TStP6csw3f2uAD37ju27k')});

  //   return next.handle(authReq);
  // }
}