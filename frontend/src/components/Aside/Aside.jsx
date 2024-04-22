import AddPatientBtn from '../AddPatientBtn/AddPatientBtn'
import Search from '../Search/Search'
import './Aside.css'

const Aside = (props) => {

  const {searchTerm, searchBy, handleSearchTerm, handleSearchBy} = props

  return (
    <aside>
      <Search
        searchTerm={searchTerm}
        searchBy={searchBy}
        handleSearchTerm={handleSearchTerm}
        handleSearchBy={handleSearchBy}
      />
      <AddPatientBtn />
    </aside>
  )
}

export default Aside