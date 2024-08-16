import Swal from 'sweetalert2'

const template = {
  toast: true,
  position: 'bottom-end',
  timer: 2000,
  showConfirmButton: false,
  iconColor: 'rgba(75, 21, 126, .7)',
  icon: 'success'
}

export const successAlert = (title) => {
  Swal.fire({
    ...template,
    title
  })
}

export const errorAlert = (title) => {
  Swal.fire({
    ...template,
    icon: 'error',
    iconColor: 'rgba(220, 53, 69, .7)',
    title
  })
}

export const deleteAlert = (title) => {
  Swal.fire({
    ...template,
    icon: 'success',
    iconColor: 'rgba(220, 53, 69, .7)',
    title
  })
}
export const warningAlert = (title) => {
  Swal.fire({
    ...template,
    icon: 'warning',
    iconColor: 'rgba(220, 53, 69, .7)',
    title
  })
}

export const wakingServerAlert = () => {
  Swal.fire({
    ...template,
    title: 'Despertando servidor, esto puede tardar unos minutos...',
    icon: 'warning',
    timer: 7000
  })
}

export const serverError = () => {
  Swal.fire({
    ...template,
    title: 'Ocurrió un error inesperado, por favor intente de nuevo más tarde',
    icon: 'error',
    iconColor: 'rgba(220, 53, 69, .7)'
  })
}