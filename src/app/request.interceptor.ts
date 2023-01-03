import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //console.log('Request Interceptor', request);

    //You have to clone a new request, and add whatever you need to add
    const newRequest = request.clone({headers: new HttpHeaders({token: '1234567'})})

    //do the HTTP call using the new request.
    return next.handle(newRequest);
  }
}
