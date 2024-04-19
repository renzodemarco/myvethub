import EntryHistory from '../EntryHistory/EntryHistory'
import './EntriesHistoryContainer.css'

const EntriesHistoryContainer = ({ data, onSelect }) => {

  return (
    <div className="entries-history-container">
      {data.map((entry, index) => {
        return <EntryHistory
          data={entry}
          key={index}
          onSelect={onSelect}
        />
      })}
    </div>
  )
}

export default EntriesHistoryContainer