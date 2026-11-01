import { Component, Input, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, ReactiveFormsModule],
  selector: 'input-password-field',
  styleUrl: './password-field.scss',
  templateUrl: './password-field.html',
})

export class PasswordField {
  hide = signal(true);
  @Input({ required: true }) control!: FormControl;

  get passwordErrors(): string | null{
    const passwordControl = this.control;
    if (passwordControl?.hasError('required')) {return "Digite uma senha."}
    if (passwordControl?.hasError('minlength')) { return "A senha precisa ter mais que 6 dígitos."}
    return null;

  }
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
