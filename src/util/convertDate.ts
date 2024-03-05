export default function convertDate(date: string) {
    const convertedDate = new Date(date)
    const monthAndDay = convertedDate.toLocaleString(undefined, { month: 'long', day: 'numeric' });

    return `${monthAndDay}`
}