import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;

  constructor(  
    private fb: FormBuilder,
    private auth:AuthService) { }

  ngOnInit() {
    this.form = this.fb.group({
      correo: ['',[Validators.required, Validators.minLength(4)]],
      contrasena: ['', [Validators.required, Validators.minLength(3)]],
    });
  }


  onSubmit(){
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      let credenciales = new Login(
        this.form.value.correo,
        this.form.value.contrasena
      );

      this.auth.login(credenciales);
    

      this.submitted=false;
    }
    

  }
}
