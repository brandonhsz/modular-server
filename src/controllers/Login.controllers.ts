import e from "express";

import { User } from "../models/Users.schema";

export class LoginController {

  static async login(req: e.Request, res: e.Response) {
    const { email: emailReceived, password: passwordReceived } = req.body;
    console.log(req.body)
    const userToLogin = await User.findOne({
      email: emailReceived,
      password: passwordReceived
    }).exec();

    if (userToLogin) {
      console.log('este paso')
      res.json({
        data: {
          status: 200,
          message: "User logged in successfully",
          user: userToLogin
        }
      });
    } else {
      console.log('este no paso')
      res.json({
        data: {
          status: 404,
          message: "User not found"
        }
      });
    }
  }

  static async signUp(req: e.Request, res: e.Response) {
    const { email, name, password, age } = req.body

    const userToCreate = await new User({
      email: email,
      name: name,
      password: password,
      age: age
    }).save();

    res.json({
      status: 200,
      message: "User created successfully",
      user: userToCreate
    });

  }
}