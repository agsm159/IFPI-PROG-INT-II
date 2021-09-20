export class Service {
    id?: number;
    title: string;
    description: string;
    budget: number;
    dateRegister: Date;
    dateLimit: Date;
    situation: string;
    comments: Comment[];
}
