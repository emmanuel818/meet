
export const extraLocations = (events) => {
  var extraLocations = events.map((event) => event.location);
  var locations = [...new Set(extraLocations)];
  return locations;
};