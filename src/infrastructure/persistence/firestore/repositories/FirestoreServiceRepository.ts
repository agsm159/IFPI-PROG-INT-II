import { db } from "..";
import { ServiceRepository } from "../../../../aplications/repositories/ServiceRepository";
import { Service } from "../../../../domain/entities/Service";


export class FirestoreServiceRepository implements ServiceRepository {
    public async all(): Promise<Service[]> {

        const servicesRef = db.collection('services');
        const servicesDoc = await servicesRef.get();



        const services: Service[] = servicesDoc.docs.map(doc => ({
            id: Number(doc.id),
            title: doc.data().title,
            description: doc.data().description,
            budget: doc.data().budget,
            dateRegister: doc.data().dateRegister,
            dateLimit: doc.data().dateLimit,
            situation: doc.data().situation,
            comments: doc.data().comments,
        }));

        return services as Service[];
    }

    public async create(data: Service): Promise<Service> {

        const { title, description,
            budget, dateRegister, dateLimit,
            situation, comments } = data

        const service = {
            title: title,
            description: description,
            budget: Number(budget),
            dateRegister: dateRegister,
            dateLimit: dateLimit,
            situation: situation,
            comments: comments
        }

        await db.collection('services').add(service)

        return service as Service
    }

    public async update(data: any, id: string): Promise<Service> {

        const serviceRef = db.collection('services');
        const serviceDoc = serviceRef.doc(data.description);
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
}
