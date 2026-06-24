# Santos y Santos - Generador de recetas oftalmicas

## Como usar
1. Instala Node.js.
2. En esta carpeta ejecuta: `npm install`
3. Para activar envio directo por correo, configura variables de entorno:
   - `SMTP_USER`: correo Gmail remitente
   - `SMTP_PASS`: app password de Gmail, no tu contraseña normal
   - `EMAIL_DESTINO`: santosysantosredes@gmail.com
4. Ejecuta: `npm start`
5. Abre: http://localhost:3000

Sin SMTP configurado, la pagina sigue guardando recetas y permite descargar XLSX/PDF.

## Ejemplo Windows PowerShell
$env:SMTP_USER="tu_correo@gmail.com"
$env:SMTP_PASS="tu_app_password"
$env:EMAIL_DESTINO="santosysantosredes@gmail.com"
npm start

## Ejemplo Mac/Linux
SMTP_USER="tu_correo@gmail.com" SMTP_PASS="tu_app_password" EMAIL_DESTINO="santosysantosredes@gmail.com" npm start
