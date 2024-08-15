import Swal from 'sweetalert2'

export const deletePatientConfirm = async (patient) => {
  return Swal.fire({
    title: `¿Desea eliminar al paciente ${patient}?`,
    icon: 'warning',
    iconColor: 'rgba(220, 53, 69, .7)',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonColor: 'rgba(220, 53, 69, .8)',
    cancelButtonColor: 'rgba(160, 160, 160)',
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    return result.isConfirmed;
  });
}

export const deleteVisitConfirm = async () => {
  return Swal.fire({
    title: `¿Desea eliminar la visita?`,
    icon: 'warning',
    iconColor: 'rgba(220, 53, 69, .7)',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonColor: 'rgba(220, 53, 69, .8)',
    cancelButtonColor: 'rgba(160, 160, 160)',
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    return result.isConfirmed;
  });
}

export const logoutConfirm = async () => {
  return Swal.fire({
    title: `¿Desea cerrar sesión?`,
    icon: 'warning',
    iconColor: 'rgba(220, 53, 69, .7)',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonColor: 'rgba(220, 53, 69, .8)',
    cancelButtonColor: 'rgba(160, 160, 160)',
    confirmButtonText: 'Cerrar sesión',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    return result.isConfirmed;
  });
}