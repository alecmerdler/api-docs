import { Observable } from 'rxjs/Observable';
import { SchemaService } from './schema.service';
import { Injectable } from '@angular/core';


@Injectable()
export class SchemaServiceGraphQL implements SchemaService {

    constructor() {

    }

    public retrieveSchema(): Observable<any> {
        return Observable.of({});
    }
}