import './Search.css'

const Search = (props) => {

  const { searchTerm, searchBy, handleSearchTerm, handleSearchBy } = props

  return (
    <div className='search-container'>
      <input
        type="text"
        className="search-input"
        placeholder="Escriba aquí para buscar"
        value={searchTerm}
        onChange={handleSearchTerm}
      />
      <select
        className="search-select"
        value={searchBy}
        onChange={handleSearchBy}
      >
        <option value='name'>Paciente</option>
        <option value='owner'>Propietario</option>
      </select>
    </div>
  )
}

export default Search