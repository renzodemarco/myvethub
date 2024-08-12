export default class CustomError {
  static new({ status, message }) {
    let error = new Error(message)
    error.status = status
    throw error
  }
}