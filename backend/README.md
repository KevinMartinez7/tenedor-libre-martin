# 🍽️ Integración Twilio - Lo de Martín

## 📋 Descripción

Este backend procesa las reservas del restaurante y envía notificaciones por WhatsApp usando Twilio.

## 🚀 Configuración Inicial

### 1. Instalar Dependencias

```bash
cd backend
npm install
```

### 2. Configurar Variables de Entorno

Copia el archivo `.env.example` a `.env`:

```bash
copy .env.example .env  # Windows
# o
cp .env.example .env    # Mac/Linux
```

Edita `.env` y completa con tus credenciales reales de Twilio:

```env
TWILIO_ACCOUNT_SID=AC6acee0b2a08eaef93eda43fe1128c641
TWILIO_AUTH_TOKEN=tu_auth_token_real_aqui
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
TWILIO_WHATSAPP_TO=whatsapp:+5492494210572
TWILIO_CONTENT_SID=HXb5b62575e6e4ff6129ad7c8efe1f983e
PORT=3000
FRONTEND_URL=http://localhost:4200
```

**⚠️ IMPORTANTE:** 
- Nunca subas el archivo `.env` a Git
- El archivo `.gitignore` ya está configurado para ignorarlo
- Reemplaza `tu_auth_token_real_aqui` con tu AuthToken de Twilio

### 3. Obtener Credenciales de Twilio

1. Inicia sesión en [Twilio Console](https://console.twilio.com/)
2. Copia tu **Account SID** y **Auth Token**
3. Ve a **Messaging** > **Try it Out** > **Send a WhatsApp message**
4. Sigue las instrucciones para configurar el sandbox de WhatsApp

### 4. Configurar Content Template (Opcional)

Si deseas usar un template de contenido:

1. Ve a Twilio Console > **Content** > **Content Templates**
2. Crea un nuevo template con variables para fecha, hora, nombre, etc.
3. Copia el `Content SID` y úsalo en `TWILIO_CONTENT_SID`

Si prefieres mensajes simples de texto, puedes:
- Dejar `TWILIO_CONTENT_SID` vacío
- El sistema enviará un mensaje formateado automáticamente

## 🏃 Ejecutar el Backend

### Modo Desarrollo (con hot-reload):

```bash
npm run dev
```

### Modo Producción:

```bash
npm run build
npm start
```

El servidor estará corriendo en: `http://localhost:3000`

## 📡 Endpoints Disponibles

### Health Check
```
GET /api/health
```
Verifica que el servidor esté funcionando.

**Respuesta:**
```json
{
  "status": "ok",
  "message": "Backend funcionando correctamente"
}
```

### Crear Reserva
```
POST /api/reservas
```

**Body (JSON):**
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "telefono": "+54 9 11 1234-5678",
  "fecha": "25/12/2024",
  "horario": "20:30",
  "personas": "3-4 personas",
  "comentarios": "Celebración de cumpleaños"
}
```

**Respuesta Exitosa:**
```json
{
  "success": true,
  "message": "Reserva recibida y notificación enviada",
  "messageSid": "SM..."
}
```

**Respuesta con Error:**
```json
{
  "success": false,
  "message": "Error al enviar la notificación"
}
```

## 🧪 Probar la Integración

### 1. Iniciar el Backend
```bash
cd backend
npm run dev
```

### 2. Iniciar el Frontend Angular
```bash
# Desde la raíz del proyecto
npm start
```

### 3. Probar el Formulario
1. Abre http://localhost:4200 en tu navegador
2. Ve a la sección de "Reservas"
3. Completa el formulario
4. Haz clic en "Confirmar Reserva"
5. Verifica que llegue el mensaje a WhatsApp

## 📝 Formato del Mensaje WhatsApp

El mensaje que se envía tiene este formato:

```
🍽️ *Nueva Reserva - Lo de Martín*

👤 *Cliente:* Juan Pérez
📅 *Fecha:* 25/12/2024
🕐 *Horario:* 20:30
👥 *Personas:* 3-4 personas
📧 *Email:* juan@example.com
📱 *Teléfono:* +54 9 11 1234-5678

💬 *Comentarios:*
Celebración de cumpleaños

✅ *Confirmar disponibilidad lo antes posible*
```

## 🔒 Seguridad

- ✅ Las credenciales de Twilio están en el backend (no expuestas al cliente)
- ✅ CORS configurado para aceptar solo el dominio del frontend
- ✅ Validación de datos en el backend
- ✅ `.env` en `.gitignore` para proteger las credenciales

## 🐛 Troubleshooting

### "Error de conexión. Verifica que el backend esté funcionando"

- Asegúrate de que el backend esté corriendo (`npm run dev`)
- Verifica que el puerto 3000 esté libre
- Revisa la consola del backend para ver errores

### "Error al enviar la notificación"

- Verifica que las credenciales de Twilio sean correctas
- Asegúrate de haber configurado el sandbox de WhatsApp
- Revisa la consola del backend para ver el error específico

### El mensaje no llega a WhatsApp

- Verifica que el número de destino esté en formato correcto: `whatsapp:+5492494210572`
- Asegúrate de haber vinculado tu número en el sandbox de Twilio
- El número debe enviar la palabra clave al sandbox antes de recibir mensajes

## 🚀 Despliegue a Producción

### Backend

Puedes desplegar el backend en:

- **Heroku**: Gratuito para proyectos pequeños
- **Railway**: Fácil deploy desde Git
- **DigitalOcean**: VPS económico
- **Vercel/Netlify**: Con funciones serverless

**Pasos básicos:**

1. Sube el código a un repositorio Git
2. Configura las variables de entorno en la plataforma
3. Actualiza `FRONTEND_URL` con la URL de producción
4. Actualiza `src/environments/environment.prod.ts` con la URL del backend

### Frontend

Ya está configurado con el script `npm run deploy` para GitHub Pages.

Actualiza `src/environments/environment.prod.ts`:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://tu-backend.herokuapp.com/api' // URL real del backend
};
```

## 📦 Estructura del Backend

```
backend/
├── src/
│   ├── server.ts              # Servidor Express principal
│   └── services/
│       └── twilio.service.ts  # Lógica de Twilio
├── dist/                      # Código compilado (generado)
├── .env                       # Variables de entorno (NO subir a Git)
├── .env.example               # Ejemplo de variables
├── .gitignore
├── package.json
└── tsconfig.json
```

## 📞 Contacto

Para dudas o problemas:
- Email: tu@email.com
- WhatsApp: +54 249 421-0572

---

**Hecho con ❤️ para Lo de Martín**
