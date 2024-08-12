import './EntryHistory.css'

const EntryHistory = ({ data, onSelect, empty, isEditing }) => {

  const hasOverflow = (element) => {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  };

  if (empty) return (
    <div className='entry-history-empty'>
      <p>Aún no hay visitas de este paciente</p>
    </div>
  )

  return (
    <button className='entry-history-card' disabled={isEditing} onClick={() => onSelect(data)}>
      <p className='entry-history-date'>{data.dateTime}</p>
      <p className={`entry-history ${hasOverflow ? 'ellipsis' : ''}`}>{data.entry}</p>
    </button>
  )
}

export default EntryHistory