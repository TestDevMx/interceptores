import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorApp';

  constructor(
    private _usuariosService: UsuariosService
  ){


    this._usuariosService.obtenerUsuarios()
      .subscribe( resp =>{
        console.log(resp)
      },
      (err) => {
        console.log('Error en el appComponent', err);
      });

  }


}
