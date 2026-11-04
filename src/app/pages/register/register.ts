import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PasswordField } from '../../shared/components/password-field/password-field';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '../../../../node_modules/@angular/common/types/_common_module-chunk';



@Component({
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, PasswordField, ReactiveFormsModule],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})
export class Register {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get passwordControl(): FormControl {
    return this.form.get(`password`) as FormControl;
  }

  get fullNameErrors(): string | null {
    const control = this.form.get('fullName');
    if (control?.hasError('required')) { return "O nome completo é obrigatório."; }
    if (control?.hasError('minlength')) { return "O nome tem menos de 3 letras."; }
    return null;
  }

  get emailErrors(): string | null {
    const control = this.form.get('email');
    if (control?.hasError('required')) { return "O email é obrigatório!" };
    if (control?.hasError('email')) { return "Insira um email válido." }
    return null;
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return

    }
    console.log(this.form.value)
  }
}
