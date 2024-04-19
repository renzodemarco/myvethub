import './EntryHistory.css'

const EntryHistory = ({ data, onSelect }) => {

  const hasOverflow = (element) => {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
  };

  return (
    <div className='entry-history-card' onClick={() => onSelect(data)}>
      <p className='entry-history-date '>{data.dateTime}</p>
      <p className={`entry-history ${hasOverflow ? 'ellipsis' : ''}`}>{data.entry}</p>
    </div>
  )
}

export default EntryHistory