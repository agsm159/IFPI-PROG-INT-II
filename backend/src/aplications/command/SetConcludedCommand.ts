import { Service } from '../../domain/entities/Service';
import { ServiceRepository } from '../repositories/ServiceRepository';

export class SetConcludedCommand {
    private serviceRepository: ServiceRepository;

    constructor(serviceRepository: ServiceRepository) {
        this.serviceRepository = serviceRepository;
    }

    public async execute(id: string): Promise<Service> {
        return await this.serviceRepository.setConcluded(id);
    }
}