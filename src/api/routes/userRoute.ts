import express from 'express';
import {
  userListGet,
  checkToken,
  userDelete,
  userGet,
  userPost,
  userPut,
  userGetByName,
} from '../controllers/userController';
import {authenticate} from '../../middlewares';

const router = express.Router();

router.route('/').post(userPost).get(userListGet).put(authenticate, userPut);

router.get('/token', authenticate, checkToken);

router.route('/:id').get(userGet).delete(authenticate, userDelete);

router.route('/user/:id').get(userGetByName);

export default router;
