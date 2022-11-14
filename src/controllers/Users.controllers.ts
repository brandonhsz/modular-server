import e from 'express';
import { User } from '../models/Users.schema';

export class UserController {

  static async findAll(req: e.Request, res: e.Response) {
    try {
      const users = await User.find()
      res.json({
        status: 200,
        message: 'finded all users',
        data: users
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
    const { name, email, password, age } = req.body
    const userModel = new User({
      name,
      email,
      password,
      age
    })

    const userSaved = await userModel.save()
    res.json({
      status: 201,
      message: 'User Created',
      data: userSaved
    })
  }
}