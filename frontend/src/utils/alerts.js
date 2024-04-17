import Swal from 'sweetalert2'

const template = {
  toast: true,
  position: 'bottom-end',
  timer: 2000,
  showConfirmButton: false
}

export const createPatientAlert = (edit) => {
  Swal.fire({
    ...template,
    title: `Paciente ${edit ? 'modificado' : 'creado'} exitosamente`,
    icon: 'success',
    iconColor: 'rgba(75, 21, 126, .7)'
  })
}

export const deletePatientAlert = (patient) => {
  Swal.fire({
    ...template,
    title: 'Se ha eliminado al paciente ' + patient.name,
    icon: 'success',
    iconColor: 'rgba(220, 53, 69, .7)'
  })
}