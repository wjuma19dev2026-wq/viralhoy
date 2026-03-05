import { Component, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true,
})
export class Login {
  loginForm!: FormGroup;
  showPassword = signal<boolean>(false);
  loginAttemptFailed = signal<boolean>(false);
  errorMessage = signal<string>('');
  isLoading = signal<boolean>(false);

  constructor(
    private fb: FormBuilder,
    public location: Location,
  ) {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  get emailControl() {
    return this.loginForm.get('email');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }

  togglePasswordVisibility(): void {
    this.showPassword.set(!this.showPassword());
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');
    this.loginAttemptFailed.set(false);

    // Simulación de login (en producción sería una llamada a un API)
    setTimeout(() => {
      const { email, password } = this.loginForm.value;

      // Validación simple para demostración
      if (email === 'test@example.com' && password === 'Password123') {
        console.log('Login exitoso:', this.loginForm.value);
        this.loginAttemptFailed.set(false);
        // Aquí irías a un dashboard o home
        this.isLoading.set(false);
      } else {
        this.loginAttemptFailed.set(true);
        this.errorMessage.set(
          'Email o contraseña inválidos. Intenta con test@example.com / Password123',
        );
        this.isLoading.set(false);
      }
    }, 1500);
  }

  forgotPassword(): void {
    console.log('Ir a recuperar contraseña');
  }

  loginWithGoogle(): void {
    console.log('Iniciar sesión con Google');
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
    }, 2000);
  }

  loginWithFacebook(): void {
    console.log('Iniciar sesión con Facebook');
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
    }, 2000);
  }
}
