import { Service } from '../../domain/entities/Service';
import { ServiceRepository } from '../repositories/ServiceRepository';

export class CreateServiceCommand {
    private serviceRepository: ServiceRepository;

    constructor(serviceRepository: ServiceRepository) {
        this.serviceRepository = serviceRepository;
    }

    public async execute(data: Service): Promise<Service> {
        return await this.serviceRepository.create(data);
    }
}