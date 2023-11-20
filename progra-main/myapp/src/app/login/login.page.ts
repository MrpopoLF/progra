import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importar FormBuilder y FormGroup
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup; // Declarar loginForm

  loginFailed = false;

  constructor(
    private formBuilder: FormBuilder, // Inyectar FormBuilder
    private authService: AuthService,
    private router: Router
  ) {
    // Inicializar el formulario en el constructor
    this.loginForm = this.formBuilder.group({
      rut: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const username = this.loginForm.value.rut;
    const password = this.loginForm.value.password;
  
    this.authService.login({ username, password }).subscribe(
      (user: any) => {
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.error('Error al iniciar sesión:', error);
        this.loginFailed = true;
        setTimeout(() => {
          this.loginFailed = false;
        }, 3000);
      }
    );
    }
  }