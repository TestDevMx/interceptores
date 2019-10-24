import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { map, catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }


  obtenerUsuarios(){

    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'Clau');

   
    return this.http.get('https://reqres.in2/api/user', {
      params,
      // headers
    })
    .pipe(

      map( resp => resp['data']),
      // catchError(this.manejarError)

    );
  }

 
}
