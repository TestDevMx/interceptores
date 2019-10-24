import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {


  
  
  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    // console.log('Paso por el interceptor');

     const headers = new HttpHeaders({
      'x-token': 'ASMV716DKLDA132'
    });

    const reqClone = req.clone({
      headers
    });


    return next.handle(reqClone)
        .pipe(

          catchError(this.manejarError)

        );
    
    // throw new Error("Method not implemented.");
  }


  manejarError(err: HttpErrorResponse){
    console.warn('Sucedio un error', err);
    return throwError('Error perzonalizado');
  }


}
