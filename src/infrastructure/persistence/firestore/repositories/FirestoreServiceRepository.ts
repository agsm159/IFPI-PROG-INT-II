import { db } from "..";
import { ServiceRepository } from "../../../../aplications/repositories/ServiceRepository";
import { Service } from "../../../../domain/entities/Service";


export class FirestoreServiceRepository implements ServiceRepository{
    public async all(): Promise<Service[]>{
        
        const servicesRef = db.collection('services');
        const servicesDoc = await servicesRef.get();
        const services = servicesDoc.docs.map(doc => ({id: doc.id, ...doc.data()}));
        
        return services as Service[];
    }
}
