import { IServer } from "./interfaces/Server.interface";
import express from 'express'
import { router } from "./routes/routes";
import mongoose from "mongoose";
import cors from 'cors'
export class Server implements IServer {

  app: express.Application

  constructor() {
    this.app = express()
    this.init()
    this.connectDB()
  }

  init() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use('/', router)
  }

  connectDB() {
    try {
      mongoose.connect('mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true')
      console.log('DB conectada')
    } catch (e) {
      console.log('error conectando DB')
    }
  }

  listen() {
    this.app.listen(3000, () => console.log('running'))
  }

}