export const formatToLocalTimeZone = (date: string) => {
  const eventDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short'
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(eventDate);
}
