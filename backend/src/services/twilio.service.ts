import twilio from 'twilio';

interface ReservaData {
  nombre: string;
  email: string;
  telefono: string;
  fecha: string;
  horario: string;
  personas: string;
  comentarios?: string;
}

interface TwilioResponse {
  success: boolean;
  messageSid?: string;
  error?: string;
}

/**
 * Envía un mensaje de WhatsApp con los datos de la reserva
 */
export async function enviarReservaWhatsApp(data: ReservaData): Promise<TwilioResponse> {
  try {
    // Leer credenciales de Twilio en tiempo de ejecución
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    
    console.log('🔐 Verificando credenciales Twilio...');
    console.log('   Account SID:', accountSid ? `${accountSid.substring(0, 10)}...` : 'NO CONFIGURADO');
    console.log('   Auth Token:', authToken ? `${authToken.substring(0, 8)}...` : 'NO CONFIGURADO');
    
    // Validar configuración de Twilio
    if (!accountSid || !authToken) {
      throw new Error('Credenciales de Twilio no configuradas');
    }

    // Inicializar cliente Twilio con las credenciales
    const client = twilio(accountSid, authToken);

    const from = process.env.TWILIO_WHATSAPP_FROM || 'whatsapp:+14155238886';
    const to = process.env.TWILIO_WHATSAPP_TO || 'whatsapp:+5492494210572';

    // Enviamos un mensaje de texto personalizado con todos los datos
    const mensaje = formatearMensajeReserva(data);
    
    const message = await client.messages.create({
      from,
      to,
      body: mensaje
    });

    return {
      success: true,
      messageSid: message.sid
    };
  } catch (error: any) {
    console.error('Error en Twilio:', error);
    return {
      success: false,
      error: error.message || 'Error desconocido'
    };
  }
}

/**
 * Formatea el mensaje de la reserva
 */
function formatearMensajeReserva(data: ReservaData): string {
  let mensaje = `🍽️ *Nueva Reserva - Lo de Martín*\n\n`;
  mensaje += `👤 *Cliente:* ${data.nombre}\n`;
  mensaje += `📅 *Fecha:* ${data.fecha}\n`;
  mensaje += `🕐 *Horario:* ${data.horario}\n`;
  mensaje += `👥 *Personas:* ${data.personas}\n`;
  mensaje += `📧 *Email:* ${data.email}\n`;
  mensaje += `📱 *Teléfono:* ${data.telefono}\n`;
  
  if (data.comentarios) {
    mensaje += `\n💬 *Comentarios:*\n${data.comentarios}\n`;
  }
  
  mensaje += `\n✅ *Confirmar disponibilidad lo antes posible*`;
  
  return mensaje;
}
