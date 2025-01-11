// 📑 Encabezados HTTP más usados en Express.js

// 🔐 Encabezados de Solicitud (Request Headers)
const requestHeaders = {
  // Indica el dominio del servidor
  Host: "example.com",

  // Identifica el navegador, sistema operativo y dispositivo
  UserAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",

  // Define los tipos de contenido aceptados por el cliente
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",

  // Idioma preferido del cliente
  AcceptLanguage: "es-ES,es;q=0.9,en;q=0.8",

  // Codificación soportada para la respuesta (compresión)
  AcceptEncoding: "gzip, deflate, br",

  // Token de autenticación (Bearer, Basic)
  Authorization: "Bearer <token>",

  // Tipo de contenido enviado en el cuerpo de la solicitud
  ContentType: "application/json",

  // Cookies enviadas al servidor
  Cookie: "sessionId=abc123; userId=456",

  // URL de la página de origen
  Referer: "https://example.com/home",

  // Origen de la solicitud (CORS)
  Origin: "https://example.com",

  // Indica si la solicitud fue realizada con AJAX
  XRequestedWith: "XMLHttpRequest",

  // Directivas de almacenamiento en caché
  CacheControl: "no-cache",

  // Solicita una parte específica de un recurso
  Range: "bytes=0-1024",

  // Gestión del tipo de conexión
  Connection: "keep-alive",
};

// 📦 Encabezados de Respuesta (Response Headers)
const responseHeaders = {
  // Tipo de contenido que devuelve el servidor
  ContentType: "application/json",

  // Longitud del cuerpo de la respuesta en bytes
  ContentLength: "348",

  // Envía cookies al cliente
  SetCookie: "sessionId=xyz789; HttpOnly",

  // Controla el almacenamiento en caché
  CacheControl: "no-store",

  // Identificador de versión del recurso
  ETag: 'W/"123456789"',

  // Redirección a otra URL
  Location: "/login",

  // Permite acceso desde otros dominios (CORS)
  AccessControlAllowOrigin: "*",

  // Indica cuánto esperar antes de intentar de nuevo
  RetryAfter: "120",

  // Define si el contenido se muestra en línea o como descarga
  ContentDisposition: 'attachment; filename="file.pdf"',

  // Información sobre el software del servidor
  Server: "Express",

  // Método de autenticación requerido
  WWWAuthenticate: 'Basic realm="User Visible Realm"',
};

// 🔐 Encabezados de Seguridad (Security Headers)
const securityHeaders = {
  // Obliga el uso de HTTPS
  StrictTransportSecurity: "max-age=31536000; includeSubDomains",

  // Controla los recursos cargados (previene XSS)
  ContentSecurityPolicy:
    "default-src 'self'; script-src 'self' https://apis.google.com",

  // Impide incrustar el sitio en un iframe
  XFrameOptions: "DENY",

  // Evita la detección automática del tipo de contenido
  XContentTypeOptions: "nosniff",

  // Controla el encabezado Referer
  ReferrerPolicy: "no-referrer",

  // Limita el acceso a APIs del navegador
  PermissionsPolicy: "geolocation=(self)",

  // Restringe recursos a dominios específicos
  CrossOriginResourcePolicy: "same-origin",
};

// 🔧 Encabezados Personalizados (Custom Headers)
const customHeaders = {
  // Define información personalizada sobre la app
  XPoweredBy: "Express",

  // Versión de la aplicación
  XAppVersion: "1.0.0",
};
