import cds from '@sap/cds';

export class HelloService extends cds.ApplicationService {
    sayHello(name) {
        return `Hello ${name}`;
    }
}
