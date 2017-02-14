import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


export abstract class SchemaService {

    public abstract retrieveSchema(version?: string): Observable<any>;

    public abstract activeReference(): Subject<any>;
}
