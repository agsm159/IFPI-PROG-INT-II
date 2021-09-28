import { Request, Response } from 'express';
import { CreateServiceCommand } from '../../aplications/command/CreateServiceCommand';
import { SetCalledOffCommand } from '../../aplications/command/SetCalledOffCommand';
import { SetConcludedCommand } from '../../aplications/command/SetConcludedCommand';
import { UpdateServiceCommand } from '../../aplications/command/UpdateServiceCommand';
import { GetAllServicesQuery } from '../../aplications/query/GetAllServicesQuery';
import { FirestoreServiceRepository } from '../../infrastructure/persistence/firestore/repositories/FirestoreServiceRepository';

export class ServiceController {

    public async getAllServices(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestoreServiceRepository();
        const query = new GetAllServicesQuery(repoService);
        const services = await query.execute();

        return res.status(200).json(services);
    }

    public async createService(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestoreServiceRepository();
        const query = new CreateServiceCommand(repoService);
        const { title, description,
            budget, dateRegister, dateLimit } = req.body;
        const service = await query.execute({
            situation: "Aberto",
            title: title,
            description: description,
            budget: budget,
            dateRegister: dateRegister,
            dateLimit: dateLimit
        });
        return res.status(200).json(service)
    }

    public async updateService(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestoreServiceRepository();
        const query = new UpdateServiceCommand(repoService);
        const { title, description,
            budget, dateLimit } = req.body;
        const service = await query.execute({
            title: title,
            description: description,
            budget: budget,
            dateLimit: dateLimit
        }, req.params.id);


        return res.status(200).json(service)
    }

    public async setCalledOff(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestoreServiceRepository();
        const query = new SetCalledOffCommand(repoService);
        const service = await query.execute(req.params.id)

        return res.status(200).json(service)
    }

    public async setConcluded(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestoreServiceRepository();
        const query = new SetConcludedCommand(repoService);
        const service = await query.execute(req.params.id)

        return res.status(200).json(service)
    }
}
