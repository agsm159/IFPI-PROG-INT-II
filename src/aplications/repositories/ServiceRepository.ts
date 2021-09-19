import { Service } from '../../domain/entities/Service';

export interface ServiceRepository {
    all(): Promise<Service[]>;
    
}