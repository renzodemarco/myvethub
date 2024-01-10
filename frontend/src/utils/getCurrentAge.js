export default function getCurrentAge(date) {
    const today = new Date();

    const diffInMilliseconds = Math.abs(today - date);
    const daysDifference = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    let result = '';

    if (daysDifference < 59) {
        result = `${daysDifference} ${daysDifference === 1 ? 'día' : 'días'}`;
    } else if (daysDifference < 365) {
        const monthsDifference = Math.floor(daysDifference / 30);
        result = `${monthsDifference} ${monthsDifference === 1 ? 'mes' : 'meses'}`;
    } else {
        const years = Math.floor(daysDifference / 365);
        const remainingMonths = Math.floor((daysDifference % 365) / 30);

        if (remainingMonths > 0) {
            result = `${years} ${years === 1 ? 'año' : 'años'} y ${remainingMonths} ${remainingMonths === 1 ? 'mes' : 'meses'}`;
        } else {
            result = `${years} ${years === 1 ? 'año' : 'años'}`;
        }
    }

    return result;
}