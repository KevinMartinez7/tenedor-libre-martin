import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ReservaData {
  nombre: string;
  email: string;
  telefono: string;
  fecha: string;
  horario: string;
  personas: string;
  comentarios?: string;
}

export interface ReservaResponse {
  success: boolean;
  message: string;
  messageSid?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl || 'http://localhost:3000/api';

  /**
   * Envía una reserva al backend para procesarla con Twilio
   */
  enviarReserva(data: ReservaData): Observable<ReservaResponse> {
    console.log('📤 Enviando reserva al backend:', data);
    
    return this.http.post<ReservaResponse>(`${this.apiUrl}/reservas`, data).pipe(
      tap(response => {
        if (response.success) {
          console.log('✅ Reserva procesada correctamente');
        }
      }),
      catchError(error => {
        console.error('❌ Error al enviar reserva:', error);
        return of({
          success: false,
          message: 'Error al procesar la reserva. Intenta nuevamente.'
        });
      })
    );
  }

  /**
   * Verifica si el backend está disponible
   */
  checkHealth(): Observable<any> {
    return this.http.get(`${this.apiUrl}/health`).pipe(
      catchError(error => {
        console.error('Backend no disponible:', error);
        return of({ status: 'error' });
      })
    );
  }
}
