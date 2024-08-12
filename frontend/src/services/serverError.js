export default function serverError() {
  throw new Error("Error al conectar con el servidor. Por favor, intenta nuevamente más tarde.")
}