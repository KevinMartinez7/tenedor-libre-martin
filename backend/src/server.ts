import dotenv from 'dotenv';
// Cargar variables de entorno PRIMERO, antes que cualquier otra cosa
dotenv.config();

import express, { Request, Response } from 'express';
import cors from 'cors';
import { enviarReservaWhatsApp } from './services/twilio.service';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:4200'
}));
app.use(express.json());

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Backend funcionando correctamente' });
});

// Endpoint para procesar reservas
app.post('/api/reservas', async (req: Request, res: Response) => {
  try {
    const { nombre, email, telefono, fecha, horario, personas, comentarios } = req.body;

    // Validación básica
    if (!nombre || !email || !telefono || !fecha || !horario || !personas) {
      return res.status(400).json({
        success: false,
        message: 'Faltan datos obligatorios'
      });
    }

    console.log('📝 Nueva reserva recibida:', { nombre, fecha, horario, personas });

    // Enviar mensaje por WhatsApp usando Twilio
    const result = await enviarReservaWhatsApp({
      nombre,
      email,
      telefono,
      fecha,
      horario,
      personas,
      comentarios
    });

    if (result.success) {
      console.log('✅ Mensaje de WhatsApp enviado:', result.messageSid);
      return res.json({
        success: true,
        message: 'Reserva recibida y notificación enviada',
        messageSid: result.messageSid
      });
    } else {
      console.error('❌ Error al enviar WhatsApp:', result.error);
      
      // Mensaje más específico si faltan credenciales
      if (result.error?.includes('Credenciales')) {
        return res.status(500).json({
          success: false,
          message: 'Error de configuración: Configure el TWILIO_AUTH_TOKEN en el archivo .env'
        });
      }
      
      return res.status(500).json({
        success: false,
        message: 'Error al enviar la notificación: ' + result.error
      });
    }
  } catch (error) {
    console.error('❌ Error procesando reserva:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno del servidor'
    });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📱 WhatsApp configurado: ${process.env.TWILIO_WHATSAPP_TO}`);
});
