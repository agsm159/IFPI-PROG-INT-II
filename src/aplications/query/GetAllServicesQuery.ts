import { Service } from '../../domain/entities/Service';
import { ServiceRepository } from '../repositories/ServiceRepository';

export class GetAllServicesQuery {
    private serviceRepository: ServiceRepository;

    constructor(serviceRepository: ServiceRepository) {
        this.serviceRepository = serviceRepository;
    }

    async execute(): Promise<Service[]> {
        return await this.serviceRepository.all();
    }
}
