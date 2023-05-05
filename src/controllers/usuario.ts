import { Request, Response} from 'express';
import Usuario from '../models/usuario';

export const getUsers = async (req: Request, res: Response) => {
    
    const listUsers = await Usuario.findAll()

    res.json(listUsers)

}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await Usuario.findByPk(id);

    if(user) {
        res.json(user)
    } else {
        res.status(404).json({ msg: 'No existe algun usuario con la id: ' + id })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await Usuario.findByPk(id);

    if(!user) {
        res.status(404).json({  msg: 'No existe usuario con la id: ' + id  })
    } else {
       await user.destroy();
       res.status(404).json({  msg: 'El usuario ha sido eliminado exitosamente' })
    }

}


export const postUser = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Usuario.create(body);
        res.json({ msg: 'Usuario agragado exitosamente' });

    } catch (error) {
        console.log(error);
        res.json({ msg: 'Ocurrió un error, intente más tarde' });

    }
    
}




export const putUser = async(req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const user = await Usuario.findByPk(id);

        if(user){
            await user.update(body);
            res.json({ msg: 'Usuario actualizado con exito' })
    
        } else {
            res.status(404).json({ msg:'No existe usuario con la id: ' + id })
        }

    } catch (error) {
        console.log(error);
        res.json({ msg: 'Ocurrió un error, intente más tarde' });
    }

   

}