import { Request, Response } from 'express';
import { GetAllServicesQuery } from '../../aplications/query/GetAllServicesQuery';
import { FirestoreServiceRepository } from '../../infrastructure/persistence/firestore/repositories/FirestoreServiceRepository';

export class ServiceController {

    public async getAllServices(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestoreServiceRepository();
        const query = new GetAllServicesQuery(repoService);
        const services = await query.execute();
        
        return res.status(200).json(services);
    }
}
