import e from "express"
import { Patient } from "../models/Patient.schema"

export class PatientController {

  static async findAll(req: e.Request, res: e.Response) {
    try {
      const patients = await Patient.find()
      res.json({
        status: 200,
        message: 'finded all patients',
        data: patients
      })
    } catch (e) {
      res.json({
        status: 400,
        message: 'error',
        data: []
      })
    }
  }

  static async create(req: e.Request, res: e.Response) {
    const { name, lasName, age, gender, doctor, blood, procedure, details, room, status } = req.body
    const patientModel = new Patient({
      name,
      lasName,
      age,
      gender,
      doctor,
      blood,
      procedure,
      details,
      room,
      status,
    })

    const patientSaved = await patientModel.save()
    res.json({
      status: 201,
      message: 'patient Created',
      data: patientSaved
    })
  }

}