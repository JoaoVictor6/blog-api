import { Router } from 'express';
import PostController from './src/app/controllers/PostController';

const routes = Router();
routes.get('/', PostController.getPost);
routes.post('/', PostController.postRegister);
routes.delete('/', PostController.deletePost);
export default routes;
