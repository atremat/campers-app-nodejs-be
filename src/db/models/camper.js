import { Schema, model } from 'mongoose';

const ReviewSchema = new Schema({
  reviewer_name: { type: String, required: true },
  reviewer_rating: { type: Number, required: true, min: 0, max: 5 },
  comment: { type: String, required: true },
});

const DetailsSchema = new Schema({
  airConditioner: { type: Number, required: true },
  bathroom: { type: Number, required: true },
  kitchen: { type: Number, required: true },
  beds: { type: Number, required: true },
  TV: { type: Number, required: true },
  CD: { type: Number, required: true },
  radio: { type: Number, required: true },
  shower: { type: Number, required: true },
  toilet: { type: Number, required: true },
  freezer: { type: Number, required: true },
  hob: { type: Number, required: true },
  microwave: { type: Number, required: true },
  gas: { type: String, required: true },
  water: { type: String, required: true },
});

export const camperSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    location: { type: String, required: true },
    adults: { type: Number, required: true },
    children: { type: Number, required: true },
    engine: {
      type: String,
      enum: ['petrol', 'diesel', 'hybrid', 'electricity'],
      required: true,
    },
    transmission: {
      type: String,
      enum: ['automatic', 'mechanic'],
      required: true,
    },
    form: {
      type: String,
      enum: ['alcove', 'fullyIntegrated', 'panelTruck'],
      required: true,
    },
    length: { type: String, required: true },
    width: { type: String, required: true },
    height: { type: String, required: true },
    tank: { type: String, required: true },
    consumption: { type: String, required: true },
    description: { type: String, required: true },
    details: { type: DetailsSchema, required: true },
    gallery: { type: [String], required: true },
    reviews: { type: [ReviewSchema], required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Camper = model('camper', camperSchema);
