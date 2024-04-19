import { useEffect, useState } from 'react'
import './EntryForm.css'

const EntryForm = ({ isOpen, data }) => {

  if (!isOpen) return null

  const [entryValue, setEntryValue] = useState('')

  useEffect(() => {
    setEntryValue(data.entry ? data.entry : '')
    }, [data])

  const handleChange = (event) => {
    setEntryValue(event.target.value);
  };

  return (
    <div className='entry-form-container'>
      <textarea
        className='new-entry-textarea'
        value={entryValue}
        onChange={handleChange}
      />
    </div>
  )
}

export default EntryForm