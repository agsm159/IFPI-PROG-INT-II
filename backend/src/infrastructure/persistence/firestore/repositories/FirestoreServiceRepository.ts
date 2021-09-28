import { db } from "..";
import { ServiceRepository } from "../../../../aplications/repositories/ServiceRepository";
import { Service } from "../../../../domain/entities/Service";


export class FirestoreServiceRepository implements ServiceRepository {
    public async all(): Promise<Service[]> {

        const servicesRef = db.collection('services');
        const servicesDoc = await servicesRef.get();

        const services: Service[] = []
        servicesDoc.forEach((doc: any) => {
            services.push({ id: doc.id, ...doc.data() })
        });

        return services as Service[];
    }

    public async create(data: Service): Promise<Service> {

        const { title, description,
            budget, dateRegister, dateLimit,
            situation } = data

        const service = {
            title: title,
            description: description,
            budget: Number(budget),
            dateRegister: dateRegister,
            dateLimit: dateLimit,
            situation: situation,
        }

        await db.collection('services').add(service)

        return service as Service
    }

    public async update(data: Service, id: string): Promise<Service> {

        const serviceRef = db.collection('services');
        const serviceDoc = serviceRef.doc(id);
        const { title, description,
            budget, dateLimit } = data

        const service = {
            title: title,
            description: description,
            budget: Number(budget),
            dateLimit: dateLimit,
        }

        await serviceDoc.update({ service })

        return service as Service
    }

    public async setCalledOff(id: string): Promise<Service> {
        const serviceRef = db.collection('services');
        const serviceDoc = serviceRef.doc(id);
        const service = {
            situation: 'Cancelado'
        }
        await serviceDoc.update({ service })

        return service as Service
    }

    public async setConcluded(id: string): Promise<Service> {
        const serviceRef = db.collection('services');
        const serviceDoc = serviceRef.doc(id);
        const service = {
            situation: 'Concluído'
        }
        await serviceDoc.update({ service })

        return service as Service
    }
}
