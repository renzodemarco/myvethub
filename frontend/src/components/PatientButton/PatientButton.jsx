import './PatientButton.css'
import seeImg from '../../assets/ver.svg'
import editImg from '../../assets/editar.svg'
import deleteImg from '../../assets/eliminar.svg'
import canine from '../../assets/canino.svg'
import feline from '../../assets/felino.svg'
import deletePatient from '../../services/deletePatient.js'

const PatientButton = ({species, name, owner, id}) => {

    const speciesImg = species == 'canine' ? canine : feline

    const handleDelete = async () => {
        try {
            if (confirm('¿Desea eliminar el paciente?')) {
                await deletePatient(id);
                alert('Paciente eliminado');
                window.location.reload()
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <li className='patient-list-item'>
            <div className="list-item-img">
                <img src={speciesImg}/>
            </div>
            <div className="ms-2 me-auto list-item-info">
                <div className="patient-name fw-bold">{name}</div>
                <div className="owner-name">{owner}</div>
            </div>
            <button className="btn btn-primary list-item-btn" title="Ver paciente">
                <img src={seeImg}></img>
            </button>
            <button className="btn btn-secondary list-item-btn" title="Editar paciente">
                <img src={editImg}></img>
            </button>
            <button className="btn btn-danger list-item-btn" title="Eliminar paciente" onClick={handleDelete}>
                <img src={deleteImg}></img>
            </button>
        </li>
    )
}

export default PatientButton