import { Router } from 'express';
import { deleteUser, getUser, getUsers, postUser, putUser } from '../controllers/usuario';


const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.post('/', postUser);
router.put('/:id', putUser);

export default router;