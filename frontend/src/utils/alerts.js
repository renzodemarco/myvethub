import Swal from 'sweetalert2'

const template = {
  toast: true,
  position: 'bottom-end',
  timer: 2000,
  showConfirmButton: false,
  iconColor: 'rgba(75, 21, 126, .7)',
  icon: 'success'
}

export const createPatientAlert = () => {
  Swal.fire({
    ...template,
    title: `Paciente creado exitosamente`
  })
}

export const createPatientError = () => {
  Swal.fire({
    ...template,
    icon: 'error',
    iconColor: 'rgba(220, 53, 69, .7)',
    title: 'Ocurrió un error en la creación del paciente'
  })
}

export const updatePatientAlert = () => {
  Swal.fire({
    ...template,
    title: 'Paciente modificado exitosamente'
  })
}

export const updatePatientError = () => {
  Swal.fire({
    ...template,
    icon: 'error',
    iconColor: 'rgba(220, 53, 69, .7)',
    title: 'Ocurrió un error en la modificación del paciente'
  })
}

export const deletePatientConfirm = (patient) => {
  return Swal.fire({
    title: `¿Desea eliminar al paciente ${patient}?`,
    icon: 'warning',
    iconColor: 'rgba(220, 53, 69, .7)',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonColor: 'rgba(220, 53, 69, .8)',
    cancelButtonColor: 'rgba(200, 200, 200)',
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    return result.isConfirmed;
  });
}

export const deletePatientAlert = (patient) => {
  Swal.fire({
    ...template,
    title: 'Se ha eliminado al paciente ' + patient,
    icon: 'success',
    iconColor: 'rgba(220, 53, 69, .7)'
  })
}

export const deletePatientError = (patient) => {
  Swal.fire({
    ...template,
    title: 'Ocurrió un error en la eliminación del paciente ' + patient,
    icon: 'error',
    iconColor: 'rgba(220, 53, 69, .7)',
  })
}

export const createVisitAlert = () => {
  Swal.fire({
    ...template,
    title: 'Visita registrada exitosamente'
  })
}

export const createVisitError = () => {
  Swal.fire({
    ...template,
    title: 'Ocurrió un error en la creación de la visita',
    icon: 'error',
    iconColor: 'rgba(220, 53, 69, .7)',
  })
}

export const updateVisitAlert = () => {
  Swal.fire({
    ...template,
    title: 'Visita modificada exitosamente'
  })
}

export const updateVisitError = () => {
  Swal.fire({
    ...template,
    title: 'Ocurrió un error en la modificación de la visita',
    icon: 'error',
    iconColor: 'rgba(220, 53, 69, .7)',
  })
}

export const deleteVisitConfirm = () => {
  return Swal.fire({
    title: `¿Desea eliminar la visita?`,
    icon: 'warning',
    iconColor: 'rgba(220, 53, 69, .7)',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonColor: 'rgba(220, 53, 69, .8)',
    cancelButtonColor: 'rgba(200, 200, 200)',
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    return result.isConfirmed;
  });
}

export const deleteVisitAlert = () => {
  Swal.fire({
    ...template,
    title: 'Se ha eliminado la visita',
    icon: 'success',
    iconColor: 'rgba(220, 53, 69, .7)'
  })
}

export const deleteVisitError = () => {
  Swal.fire({
    ...template,
    title: 'Ocurrió un error en la eliminación de la visita',
    icon: 'error',
    iconColor: 'rgba(220, 53, 69, .7)',
  })
}

export const incompleteFields = () => {
  Swal.fire({
    ...template,
    title: 'Complete los campos obligatorios',
    icon: 'error',
    iconColor: 'rgba(220, 53, 69, .7)'
  })
}

export const loginUserFieldsError = () => {
  Swal.fire({
    ...template,
    title: 'Correo electrónico o contraseña inválidas',
    icon: 'warning',
    iconColor: 'rgba(220, 53, 69, .7)',
  })
}

export const loginUser404Error = () => {
  Swal.fire({
    ...template,
    title: 'No se ha encontrado el usuario',
    icon: 'error',
    iconColor: 'rgba(220, 53, 69, .7)',
  })
}

export const serverError = () => {
  Swal.fire({
    ...template,
    title: 'Ocurrió un error inesperado, por favor intente de nuevo más tarde',
    icon: 'error',
    iconColor: 'rgba(220, 53, 69, .7)',
  })
}