import { SORT_ORDER } from '../constants/index.js';
import { Camper } from '../db/models/camper.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getCampers = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const campersQuery = Camper.find();

  if (filter.location) {
    campersQuery
      .where('location')
      .regex(new RegExp(filter.location.trim(), 'i'));
  }

  const [campersCount, campers] = await Promise.all([
    Camper.find().merge(campersQuery).countDocuments(),
    campersQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(campersCount, perPage, page);

  return {
    data: campers,
    ...paginationData,
  };
};
