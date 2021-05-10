import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
  ) { }


  login(Credenciales: Login) {
    console.log(Credenciales);
    localStorage.setItem('token2021', JSON.stringify(Credenciales));

    Swal.fire(
      'Hola!',
      'Bienvenido '+`${Credenciales.Email}`,
      'success'
    )
    this.router.navigate(['/'], { replaceUrl: true });

  }
}
