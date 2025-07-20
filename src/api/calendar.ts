'use server';

const calendarId = process.env.GOOGLE_CALENDAR_ID;
const apiKey = process.env.GOOGLE_API_KEY;

export const getUpcomingEvents = async (token = '') => {
  
  let { nextPageToken, items } = await getCalendarItems(token);

  // TODO: implement pagination
  // const calendarItems = items;
  // while (nextPageToken) {
  //   items = await getCalendarItems(nextPageToken);
  //   calendarItems.push(items.items);
  //   nextPageToken = items.nextPageToken;
  // }
  return { items, nextPageToken };
};

const getCalendarItems = async (nextPageToken: string) => {
  const eventsStartDate = new Date().toISOString();
  const eventsEndDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${eventsStartDate}&timeMax=${eventsEndDate}&pageToken=${nextPageToken}&singleEvents=true&maxResults=10`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error));
}
