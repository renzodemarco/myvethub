import './EntryForm.css'

const EntryForm = ({ isOpen, entryValue, handleEntryChange }) => {

  if (!isOpen) return null

  return (
    <div className='entry-form-container'>
      <textarea
        className='new-entry-textarea'
        value={entryValue}
        onChange={handleEntryChange}
        placeholder='Ingrese la visita...'
      />
    </div>
  )
}

export default EntryForm