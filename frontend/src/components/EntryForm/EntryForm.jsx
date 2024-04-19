import './EntryForm.css'

const EntryForm = ({ isOpen, data }) => {

  if (!isOpen) return null

  return (
    <div className='entry-form-container'>
      <textarea className='new-entry-textarea' value={data.entry} />
    </div>
  )
}

export default EntryForm