import { Router } from 'express'
import { UserController } from '../controllers/Users.controllers';
import { PatientController } from '../controllers/Patient.controllers';
import { LoginController } from '../controllers/Login.controllers';

export const router = Router();

router.use((req, res, next) => {
  console.log(`${res.statusCode}`)
  next()
})

router.get('/', UserController.findAll);
router.post('/', UserController.create);

router.get('/patient', PatientController.findAll);
router.post('/patient', PatientController.create);

router.post('/login', LoginController.login)
router.post('/signup', LoginController.signUp)
