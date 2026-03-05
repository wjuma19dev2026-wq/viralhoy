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

interface RegistrationStep {
  number: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
  standalone: true,
})
export class Register {
  currentStep = signal<number>(1);
  totalSteps = 4;

  registrationForm!: FormGroup;
  registrationCompleted = signal<boolean>(false);
  errorMessage = signal<string>('');

  steps: RegistrationStep[] = [
    {
      number: 1,
      title: 'Información Personal',
      description: 'Ingresa tu nombre y email',
    },
    {
      number: 2,
      title: 'Contraseña',
      description: 'Crea una contraseña segura',
    },
    {
      number: 3,
      title: 'Datos Adicionales',
      description: 'Información de contacto',
    },
    {
      number: 4,
      title: 'Confirmación',
      description: 'Revisa tu información',
    },
  ];

  constructor(
    private fb: FormBuilder,
    public location: Location,
  ) {
    this.initializeForm();
  }

  initializeForm(): void {
    this.registrationForm = this.fb.group({
      // Step 1
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      // Step 2
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      // Step 3
      phone: ['', [Validators.required, Validators.pattern(/^[0-9\-\+\(\)\s]+$/)]],
      country: ['', Validators.required],
      // Step 4 - terms and conditions
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  get step1Controls() {
    return {
      firstName: this.registrationForm.get('firstName'),
      lastName: this.registrationForm.get('lastName'),
      email: this.registrationForm.get('email'),
    };
  }

  get step2Controls() {
    return {
      password: this.registrationForm.get('password'),
      confirmPassword: this.registrationForm.get('confirmPassword'),
    };
  }

  get step3Controls() {
    return {
      phone: this.registrationForm.get('phone'),
      country: this.registrationForm.get('country'),
    };
  }

  isStep1Valid(): boolean {
    return (
      (this.step1Controls.firstName?.valid ?? false) &&
      (this.step1Controls.lastName?.valid ?? false) &&
      (this.step1Controls.email?.valid ?? false)
    );
  }

  isStep2Valid(): boolean {
    const password = this.step2Controls.password?.value;
    const confirmPassword = this.step2Controls.confirmPassword?.value;
    return (
      (this.step2Controls.password?.valid ?? false) &&
      (this.step2Controls.confirmPassword?.valid ?? false) &&
      password === confirmPassword
    );
  }

  isStep3Valid(): boolean {
    return (
      (this.step3Controls.phone?.valid ?? false) && (this.step3Controls.country?.valid ?? false)
    );
  }

  isStep4Valid(): boolean {
    return this.registrationForm.get('acceptTerms')?.valid ?? false;
  }

  canGoToNextStep(): boolean {
    switch (this.currentStep()) {
      case 1:
        return this.isStep1Valid();
      case 2:
        return this.isStep2Valid();
      case 3:
        return this.isStep3Valid();
      case 4:
        return this.isStep4Valid();
      default:
        return false;
    }
  }

  nextStep(): void {
    this.errorMessage.set('');
    if (this.canGoToNextStep()) {
      if (this.currentStep() < this.totalSteps) {
        this.currentStep.set(this.currentStep() + 1);
      }
    }
  }

  previousStep(): void {
    if (this.currentStep() > 1) {
      this.currentStep.set(this.currentStep() - 1);
      this.errorMessage.set('');
    }
  }

  goToStep(step: number): void {
    if (step < this.currentStep()) {
      this.currentStep.set(step);
      this.errorMessage.set('');
    }
  }

  submitForm(): void {
    if (this.registrationForm.valid) {
      // Aquí enviarías los datos al servidor
      console.log('Registro completado:', this.registrationForm.value);
      this.registrationCompleted.set(true);
    }
  }

  getPasswordStrength(): string {
    const password = this.registrationForm.get('password')?.value;
    if (!password) return '';
    if (password.length < 8) return 'Débil';
    if (password.length < 12 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) return 'Media';
    return 'Fuerte';
  }
}
