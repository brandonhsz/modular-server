import { Schema, model } from 'mongoose'
import { IPatient } from '../interfaces/Patient.interface';

const patientSchema = new Schema<IPatient>({
  name: { type: String, required: true },
  lasName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  doctor: { type: String, required: true },
  blood: { type: String, required: true },
  procedure: { type: String, required: true },
  details: { type: String, required: true },
  room: { type: String, required: true },
  status: { type: Boolean, required: true },
})

export const Patient = model<IPatient>('patient', patientSchema)