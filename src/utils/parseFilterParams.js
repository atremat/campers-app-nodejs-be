// const parseContactType = (contactType) => {
//   const isString = typeof contactType === 'string';

//   if (!isString) return;

//   const isContactType = (contactType) =>
//     ['work', 'home', 'personal'].includes(contactType);

//   if (isContactType(contactType)) return contactType;
// };

// const parseIsFavourite = (favourite) => {
//   if (favourite === 'true' || favourite === 'false') {
//     return favourite;
//   }
// };
const parseLocation = (location) => {
  const isString = typeof location === 'string';

  if (!isString) return;

  return location;
};

export const parseFilterParams = (query) => {
  const { location } = query;
  // const { location, vehicleType, AC, shower, TV, kitchen, automatic } = query;
  // const { type, isFavourite } = query;

  const parsedLocation = parseLocation(location);

  // const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    location: parsedLocation,
  };
};
