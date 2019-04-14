import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerInterceptorService {

  constructor(public toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((success) => {
      if (success instanceof HttpResponse) {
        if (success.url.endsWith('login')
          || success.url.endsWith('register')
          || success.url.endsWith('add')
          || success.url.includes('delete')) {
          this.toastr.success(success.body.message)
        }
      }
    }), catchError((err) => {
      this.toastr.error(err.error.message)
      throw err;
    }))
  }
}
