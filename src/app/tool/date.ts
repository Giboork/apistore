export function formatISODate(isoDate: string, includeTime?: boolean): string {

    console.log(isoDate, 'isoDateisoDate')
    if(!isoDate) {
        return ''
    }

    const date = new Date(isoDate);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    let formattedDate = `${year}.${month}.${day}`;

    if (includeTime) {
        const hours = String(date.getUTCHours()).padStart(2, "0");
        const minutes = String(date.getUTCMinutes()).padStart(2, "0");
        formattedDate += ` ${hours}:${minutes}`;
    }

    return formattedDate;
}
