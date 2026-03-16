import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FlatpickrDirective } from '../../shared/directives/flatpickr.directive';
import { ReservaService } from '../../core/services/reserva.service';

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
  error = signal<string | null>(null);
  showModal = signal(false);
  whatsappMessage = signal('');

  // Configuración de WhatsApp
  readonly whatsappNumber = '5492494210572'; // Sin el símbolo + ni espacios

  readonly personas = [
    '1-2 personas',
    '3-4 personas',
    '5-6 personas',
    '7-10 personas',
    'Más de 10',
  ];
  
  readonly horariosAlmuerzo = [
    '12:00',
    '12:05',
    '12:10',
    '12:15',
    '12:20',
    '12:25',
    '12:30',
    '12:35',
    '12:40',
    '12:45',
    '12:50',
    '12:55',
    '13:00',
    '13:05',
    '13:10',
    '13:15',
    '13:20',
    '13:25',
    '13:30',
  ];
  
  readonly horariosCena = [
    '20:30',
    '20:35',
    '20:40',
    '20:45',
    '20:50',
    '20:55',
    '21:00',
    '21:05',
    '21:10',
  ];

  form = new (class {} as any)();
  horariosDisponibles = signal<string[]>([]);

  private fb = inject(FormBuilder);
  private reservaService = inject(ReservaService);

  constructor() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\+?[\d\s\-()]{8,}$/)]],
      fecha: ['', Validators.required],
      turno: ['', Validators.required],
      horario: ['', Validators.required],
      personas: ['', Validators.required],
      comentarios: [''],
    });

    // Escuchar cambios en el turno para actualizar horarios disponibles
    this.form.get('turno')?.valueChanges.subscribe((turno: string) => {
      if (turno === 'almuerzo') {
        this.horariosDisponibles.set(this.horariosAlmuerzo);
      } else if (turno === 'cena') {
        this.horariosDisponibles.set(this.horariosCena);
      } else {
        this.horariosDisponibles.set([]);
      }
      // Resetear el horario cuando cambia el turno
      this.form.patchValue({ horario: '' });
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

    // Generar mensaje de WhatsApp
    const mensaje = this.generarMensajeWhatsApp();
    this.whatsappMessage.set(mensaje);
    
    // Mostrar modal de confirmación
    this.showModal.set(true);

    /* CÓDIGO DE TWILIO - COMENTADO PARA USAR WhatsApp DIRECTO
    this.loading.set(true);
    this.error.set(null);

    const reservaData = {
      nombre: this.form.value.nombre,
      email: this.form.value.email,
      telefono: this.form.value.telefono,
      fecha: this.form.value.fecha,
      horario: this.form.value.horario,
      personas: this.form.value.personas,
      comentarios: this.form.value.comentarios || ''
    };

    this.reservaService.enviarReserva(reservaData).subscribe({
      next: (response) => {
        this.loading.set(false);
        if (response.success) {
          this.submitted.set(true);
          console.log('✅ Reserva enviada correctamente');
        } else {
          this.error.set(response.message || 'Error al procesar la reserva');
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set('Error de conexión. Verifica que el backend esté funcionando.');
        console.error('Error:', err);
      }
    });
    */
  }

  generarMensajeWhatsApp(): string {
    const data = this.form.value;
    const turnoTexto = data.turno === 'almuerzo' ? '🍽️ Almuerzo' : '🌙 Cena';
    
    let mensaje = `🍽️ *Solicitud de Reserva - Lo de Martín*\n\n`;
    mensaje += `👤 *Nombre:* ${data.nombre}\n`;
    mensaje += `📅 *Fecha:* ${data.fecha}\n`;
    mensaje += `⏰ *Turno:* ${turnoTexto}\n`;
    mensaje += `🕐 *Horario:* ${data.horario}\n`;
    mensaje += `👥 *Personas:* ${data.personas}\n`;
    mensaje += `📧 *Email:* ${data.email}\n`;
    mensaje += `📱 *Teléfono:* ${data.telefono}\n`;
    
    if (data.comentarios) {
      mensaje += `\n💬 *Comentarios:* ${data.comentarios}\n`;
    }
    
    mensaje += `\n¡Espero su confirmación! 😊`;
    return mensaje;
  }

  confirmarWhatsApp() {
    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(this.whatsappMessage());
    
    // Abrir WhatsApp con el mensaje pre-cargado
    const url = `https://wa.me/${this.whatsappNumber}?text=${mensajeCodificado}`;
    window.open(url, '_blank');
    
    // Cerrar modal y resetear formulario
    this.showModal.set(false);
    this.submitted.set(true);
  }

  cancelarModal() {
    this.showModal.set(false);
  }

  reset() {
    this.submitted.set(false);
    this.error.set(null);
    this.form.reset();
  }
}
