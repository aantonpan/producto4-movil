# Producto 4 - Notificaciones Push con Expo y Firebase (UOC)

## ✅ Objetivo

Implementar la recepción de notificaciones push en una aplicación móvil desarrollada con Expo Go, usando Firebase Cloud Messaging (FCM) y demostrando su funcionamiento mediante el envío desde Postman.

---

## 🧩 Tecnologías utilizadas

- Expo Managed Workflow
- Firebase Cloud Messaging (FCM)
- expo-notifications
- expo-device
- Postman (para enviar notificaciones)
- TypeScript

---

## 🧪 Pasos realizados

1. **Creación del proyecto en Firebase**
   - Activación de FCM
   - Obtención del projectId

2. **Configuración del proyecto Expo**
   - Registro de permisos para notificaciones
   - Generación del Expo Push Token
   - Visualización del token en pantalla y consola

3. **Recepción de notificaciones**
   - Implementación del listener `addNotificationReceivedListener`
   - Registro de notificaciones en consola

4. **Envío de notificación push desde Postman**
   - URL: `https://exp.host/--/api/v2/push/send`
   - Método: POST
   - Headers:
     - Content-Type: application/json
     - Accept: application/json
   - Body:
```json
{
  "to": "ExponentPushToken[XXXXXXXXXXXXXXX]",
  "title": "Prueba desde Postman",
  "body": "Esto es una notificación enviada por Postman 📲"
}
```

---

## ⚠️ Limitaciones y decisiones técnicas

- **Expo Go en iOS no muestra banners de notificación**: se detectó la recepción usando consola y `addNotificationReceivedListener`.
- **No se usó `google-services.json`** ya que Expo Managed no lo requiere.
- **No se usó Firebase Console** para el envío porque no acepta tokens de tipo `ExponentPushToken[...]`.

---

## ✅ Resultado

- Token generado correctamente y visible
- Notificaciones recibidas internamente
- Proyecto funcional, probado y listo para entrega

---

## 📎 Archivos relevantes

- `firebase/notifications.ts` – lógica para permisos y obtención de token
- `app/Home.tsx` – vista principal que muestra el token y escucha notificaciones

---

Este proyecto cumple con los requisitos del Producto 4 de la UOC, incluyendo los pasos 9 y 10 con justificación técnica.

