import { useState, useEffect } from "react";
import getCurrentAge from '../../utils/getCurrentAge.js'
import "./DatePicker.css";
import getTodayFormatted from "../../utils/getTodayFormatted.js";

const DatePicker = ({ initialValue, onChange, disabled }) => {
  const today = new Date()
  const minDate = new Date(today)
  minDate.setDate(today.getDate() - 10000);
  const todayFormatted = getTodayFormatted()

  const [startDate, setStartDate] = useState(todayFormatted);
  const [difference, setDifference] = useState('');

  useEffect(() => {
    if (initialValue) {
      setStartDate(initialValue);
      const result = getCurrentAge(new Date(initialValue))
      setDifference(result);
    }

  }, [initialValue]);

  const handleDateBlur = (event) => {
    const selectedDate = new Date(event.target.value);
    if (selectedDate > today || selectedDate < minDate) {
      setDifference('');
      setStartDate(todayFormatted);
    }
    else {
      const result = getCurrentAge(selectedDate);
      setDifference(result);
      onChange(event.target.value);
    }
  };

  return (
    <div className="date-picker-container">
      <div className="date-picker">
        <label htmlFor="start-date">Fecha de nacimiento</label>
        <input
          type="date"
          className="form-control"
          id="start-date"
          name='birthDate'
          value={startDate}
          onBlur={handleDateBlur}
          onChange={(event) => setStartDate(event.target.value)}
          disabled={disabled}
        />
      </div>
      <div className="current-age">
        <p>{difference}</p>
      </div>
    </div>
  );
};

export default DatePicker;
