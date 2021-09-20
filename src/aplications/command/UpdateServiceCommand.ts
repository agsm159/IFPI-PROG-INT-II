import { Service } from '../../domain/entities/Service';
import { ServiceRepository } from '../repositories/ServiceRepository';

export class UpdateServiceCommand {
    private serviceRepository: ServiceRepository;

    constructor(serviceRepository: ServiceRepository) {
        this.serviceRepository = serviceRepository;
    }

    public async execute(data: any, id: string): Promise<Service> {
        return await this.serviceRepository.update(data, id);
    }
}