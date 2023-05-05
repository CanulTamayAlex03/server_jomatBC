import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import rUser from '../routes/usuario';
import db from '../db/connection';


class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Corriendo en el puerto: ' + this.port)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'Api trabajando'
            })
        })

        this.app.use('/api/usuarios', rUser) 
    }

    midlewares() {
        //Parsera el body

        this.app.use(express.json());

        // Cors
        this.app.use(cors());

    }



    async dbConnect() {

        try {
            await db.authenticate();
            console.log('conexion exitosa a la dase de datos');
            
        } catch (error) {
            console.log(error);
            console.log('Error al intentar conectarse a la base de datos');
        }
     
    }


}

export default Server;