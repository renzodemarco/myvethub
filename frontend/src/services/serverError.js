export default function serverError() {
  return { error: true, status: null, message: 'No se pudo conectar con el servidor. Por favor, intenta de nuevo más tarde.' }
}