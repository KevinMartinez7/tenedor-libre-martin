import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FlatpickrDirective } from '../../shared/directives/flatpickr.directive';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FlatpickrDirective],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.scss',
})
export class ReservasComponent {
  submitted = signal(false);
  loading = signal(false);

  readonly personas = [
    '1-2 personas',
    '3-4 personas',
    '5-6 personas',
    '7-10 personas',
    'Más de 10',
  ];
  readonly horarios = [
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
  ];

  form = new (class {} as any)();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\+?[\d\s\-()]{8,}$/)]],
      fecha: ['', Validators.required],
      horario: ['', Validators.required],
      personas: ['', Validators.required],
      comentarios: [''],
    });
  }

  get f() {
    return this.form.controls;
  }

  isInvalid(name: string) {
    const c = this.form.get(name);
    return c?.invalid && (c?.dirty || c?.touched);
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    await new Promise((r) => setTimeout(r, 1400));
    this.loading.set(false);
    this.submitted.set(true);
  }

  reset() {
    this.submitted.set(false);
    this.form.reset();
  }
}
