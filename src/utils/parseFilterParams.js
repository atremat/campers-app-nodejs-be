const parseLocation = (location) => {
  const isString = typeof location === 'string';

  if (!isString) return;

  return location;
};

export const parseFilterParams = (query) => {
  const { location } = query;

  const parsedLocation = parseLocation(location);

  return {
    location: parsedLocation,
  };
};
