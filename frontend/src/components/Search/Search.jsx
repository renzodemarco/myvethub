import './Search.css'

const Search = () => {
    return (
        <div className='search-container'>
            <input type="text" className="search-input" placeholder="Escriba aquí para buscar"/>
            <select className="search-select">
                <option>Paciente</option>
                <option>Propietario</option>
            </select>
        </div>
    )
}

export default Search