// Propiedades Comunes de req en Express.js

const reqProperties = {
  // Hace referencia a la instancia de la aplicación Express
  app: "Instancia de la aplicación Express",

  // Ruta base sobre la que se montó el enrutador
  baseUrl: "/ruta/base",

  // Contiene los datos enviados en el cuerpo de la solicitud (POST, PUT, PATCH)
  // Requiere middleware como express.json() o express.urlencoded()
  body: {
    /* datos enviados por el cliente */
  },

  // Contiene cookies enviadas por el cliente
  // Requiere el middleware cookie-parser
  cookies: {
    /* cookies del cliente */
  },

  // Devuelve true si la respuesta aún no ha sido modificada (Relacionado con caché)
  fresh: true,

  // Nombre del host desde donde se hizo la solicitud (ej. "localhost" o "example.com")
  hostname: "localhost",

  // Dirección IP del cliente
  ip: "127.0.0.1",

  // Lista de IPs en caso de estar detrás de proxies
  // Requiere configurar trust proxy
  ips: ["127.0.0.1"],

  // Método HTTP utilizado (GET, POST, PUT, DELETE...)
  method: "GET",

  // La URL original solicitada, sin modificaciones
  originalUrl: "/api/usuarios",

  // Parámetros de ruta definidos dinámicamente (ej. /user/:id → req.params.id)
  params: { id: "123" },

  // Devuelve solo la ruta de la solicitud (sin query)
  path: "/api/usuarios",

  // Protocolo utilizado: "http" o "https"
  protocol: "http",

  // Contiene los parámetros de consulta (query string)
  // Ejemplo: /search?term=express → req.query.term
  query: { term: "express" },

  // Información sobre la ruta actual que coincidió con la solicitud
  route: {
    /* información de la ruta */
  },

  // Devuelve true si la solicitud fue realizada con HTTPS
  secure: false,

  // Cookies firmadas, si se utiliza una clave secreta
  signedCookies: {
    /* cookies firmadas */
  },

  // Devuelve true si la respuesta está desactualizada
  stale: false,

  // Devuelve un array con los subdominios de la solicitud
  subdomains: [],

  // Devuelve true si la solicitud fue hecha con XMLHttpRequest (AJAX)
  xhr: false,
};

// Métodos de req
const reqMethods = {
  // Devuelve el mejor tipo de contenido aceptado (html, json, etc.)
  accepts: "application/json",

  // Verifica si el cliente acepta ciertos conjuntos de caracteres
  acceptsCharsets: "utf-8",

  // Verifica si el cliente acepta ciertos tipos de codificación (gzip, deflate)
  acceptsEncodings: "gzip",

  // Verifica si el cliente acepta ciertos idiomas
  acceptsLanguages: "es-ES",

  // Devuelve el valor de un encabezado específico
  getHeader: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",

  // Comprueba si el tipo de contenido coincide
  isType: "application/json",

  // Accede a parámetros de ruta, query o body (Deprecado)
  param: "valor",
};

// Propiedades Heredadas de Node.js
const nodeReqProperties = {
  // Todos los encabezados HTTP enviados
  headers: { "content-type": "application/json" },

  // Versión del protocolo HTTP utilizado (ej. "1.1" o "2.0")
  httpVersion: "1.1",

  // Encabezados sin procesar
  rawHeaders: ["Content-Type", "application/json"],

  // Encabezados de la sección de tráileres (generalmente vacíos)
  rawTrailers: [],

  // Establece el tiempo de espera para la solicitud
  setTimeout: "Tiempo de espera configurado",

  // Proporciona acceso al socket de red subyacente
  socket: {
    /* información del socket */
  },
};
