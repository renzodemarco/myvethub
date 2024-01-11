import formatDate from "./formatDate.js";

export default function getTodayFormatted() {
    const today = new Date()
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    return formatDate(year, month, day)
}