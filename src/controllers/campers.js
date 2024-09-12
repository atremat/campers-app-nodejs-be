import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';
import { getAllCampers } from '../services/campers.js';

export const getCampersController = async (req, res) => {
  const campers = await getAllCampers();

  res.json({
    data: campers,
  });
};
