import { Observable } from 'rxjs/Observable';


export abstract class SchemaService {

    public abstract retrieveSchema(): Observable<any>;
}