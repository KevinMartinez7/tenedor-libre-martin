# 🚀 Guía Rápida - Integración Twilio

## Pasos para Activar las Notificaciones por WhatsApp

### 1️⃣ Configurar el Backend

```bash
# Navegar a la carpeta backend
cd backend

# Instalar dependencias
npm install

# Configurar variables de entorno
# Abre el archivo .env y completa tu AuthToken de Twilio
# (ya está preconfigurado con tus otros datos)
```

### 2️⃣ Completar Credenciales

Edita `backend\.env` y reemplaza `TU_AUTH_TOKEN_AQUI` con tu token real de Twilio.

Puedes encontrarlo en: https://console.twilio.com/

### 3️⃣ Iniciar el Backend

```bash
# Desde la carpeta backend
npm run dev
```

Verás: `🚀 Servidor corriendo en http://localhost:3000`

### 4️⃣ Iniciar el Frontend

```bash
# Desde la raíz del proyecto (otra terminal)
npm start
```

### 5️⃣ Probar

1. Abre http://localhost:4200
2. Ve a la sección "Reservas"
3. Completa el formulario
4. ¡Verifica que llegue el WhatsApp a +54 249 421-0572!

## 📁 ¿Qué se Creó?

```
✅ backend/                    # Servidor Node.js/Express
   ├── src/
   │   ├── server.ts          # Servidor principal
   │   └── services/
   │       └── twilio.service.ts  # Integración con Twilio
   ├── .env                   # Credenciales (NO subir a Git)
   ├── package.json
   └── README.md              # Documentación completa

✅ src/app/core/services/
   └── reserva.service.ts     # Servicio Angular para llamar al backend

✅ src/environments/
   ├── environment.ts         # Config desarrollo
   └── environment.prod.ts    # Config producción

✅ Componente de reservas actualizado para usar el servicio
```

## 🔐 Seguridad

- ✅ Las credenciales están en el backend (seguras)
- ✅ `.env` no se sube a Git
- ✅ CORS configurado

## 📚 Más Info

Lee `backend/README.md` para documentación completa.
