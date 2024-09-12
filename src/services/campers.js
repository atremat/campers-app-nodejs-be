import { Camper } from '../db/models/camper.js';

export const getAllCampers = () => Camper.find();
