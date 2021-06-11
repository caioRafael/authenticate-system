import {Router} from 'express';
import { AuthenticateController } from './controller/AuthenticateController';
import { AuthorizationController } from './controller/AuthorizationController';
import { UserController } from './controller/UserController';
const router = Router();

const authorizationController = new AuthorizationController();
const userController = new UserController();
const authenticateController = new AuthenticateController();

//autenticação de usuário
router.post('/authenticate', authenticateController.authenticate);

//rotas de autorizações
router.post('/authorization', authorizationController.create);
router.get('/authorization', authorizationController.list);
//rotas de usuário
router.post('/users', userController.create);
router.get('/users', userController.list);

export {router};