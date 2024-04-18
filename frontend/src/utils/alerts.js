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

export const updatePatientAlert = () => {
  Swal.fire({
    ...template,
    title: `Paciente modificado exitosamente`,
    iconColor: 'rgba(200, 200, 200, .7)'
  })
}

export const deletePatientConfirm = (patient) => {
  return Swal.fire({
    title: `¿Desea eliminar al paciente ${patient}?`,
    icon: 'warning',
    iconColor: 'rgba(220, 53, 69, .7)',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonColor: 'rgba(220, 53, 69)',
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