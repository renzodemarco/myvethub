import EntryHistory from '../EntryHistory/EntryHistory'
import './EntriesHistoryContainer.css'

const EntriesHistoryContainer = ({ data, onSelect, isEditing }) => {

  return (
    <div className="entries-history-container">
      { data.length < 1 ? <EntryHistory empty/> :
        data.map((entry, index) => {
          return <EntryHistory
            data={entry}
            key={index}
            onSelect={onSelect}
            isEditing={isEditing}
          />
      })}
    </div>
  )
}

export default EntriesHistoryContainer