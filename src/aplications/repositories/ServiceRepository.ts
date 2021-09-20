import { Service } from '../../domain/entities/Service';

export interface ServiceRepository {
    all(): Promise<Service[]>;
    create(data: Service): Promise<Service>;
    update(data: Service, id: string): Promise<Service>
}