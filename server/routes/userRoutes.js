import { Router } from "express";
import { getUser, getUsers } from "../controllers/userController.js";
import authorize from "../middlewares/authMiddleware.js";
import { updateUser } from "../controllers/userController.js";
import { deleteUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id',authorize, getUser);

userRouter.post('/', (req,res)=>res.send({title:"CREATE new user"}));

userRouter.put('/update/:id', updateUser);

userRouter.delete('/delete/:id', deleteUser);

export default userRouter;