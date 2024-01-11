import { useState, useEffect } from "react";
import getCurrentAge from '../../utils/getCurrentAge.js'
import "./DatePicker.css";
import formatDate from "../../utils/formatDate.js";

const DatePicker = () => {
    const [startDate, setStartDate] = useState('');
    const [difference, setDifference] = useState('');

    const today = new Date()
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    const todayFormatted = formatDate(year, month, day)

    useEffect(() => {
        setStartDate(todayFormatted);
    }, []);

    const handleDateBlur = (event) => {
        const selectedDate = new Date(event.target.value);
        if (selectedDate > today) {
            setDifference('');
            return setStartDate(todayFormatted);
        } 
        const result = getCurrentAge(selectedDate);
        setDifference(result);
    };

    return (
        <div className="date-picker-container">
            <div className="date-picker">
                <label htmlFor="start-date">Fecha de nacimiento</label>
                <input
                    type="date"
                    className="form-control"
                    id="start-date"
                    value={startDate}
                    onBlur={handleDateBlur}
                    onChange={(event) => setStartDate(event.target.value)}
                />
            </div>
            <div className="current-age">
                    <p>{difference}</p>
            </div>
        </div>
    );
};

export default DatePicker;
