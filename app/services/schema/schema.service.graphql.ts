import { Observable } from 'rxjs/Observable';
import { SchemaService } from './schema.service';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class SchemaServiceGraphQL implements SchemaService {

    private requestOptions: RequestOptions;
    private query: string = `
        query IntrospectionQuery {
            __schema {
                queryType { name }
                mutationType { name }
                subscriptionType { name }
                types { ...FullType }
                directives {
                    name
                    description
                    locations
                    args { ...InputValue }
                }
            }
        }
        fragment FullType on __Type {
            kind
            name
            description
            fields(includeDeprecated: true) {
                name
                description
                args { ...InputValue }
                type { ...TypeRef }
                isDeprecated
                deprecationReason
            }
            inputFields { ...InputValue }
            interfaces { ...TypeRef }
            enumValues(includeDeprecated: true) {
                name
                description
                isDeprecated
                deprecationReason
            }
            possibleTypes { ...TypeRef }
        }
        
        fragment InputValue on __InputValue {
            name
            description
            type { ...TypeRef }
            defaultValue
        }
        
        fragment TypeRef on __Type {
            kind
            name
            ofType {
                kind
                name
                ofType {
                    kind
                    name
                    ofType {
                        kind
                        name
                        ofType {
                            kind
                            name
                            ofType {
                                kind
                                name
                                ofType {
                                    kind
                                    name
                                    ofType {
                                        kind
                                        name
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }`;

    constructor(private http: Http) {
        this.requestOptions = new RequestOptions({
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
        });
    }

    public retrieveSchema(): Observable<any> {
        return this.http.post(`http://localhost:3001/v1.0/foundry`, {query: this.query}, this.requestOptions)
            .map((response: Response) => {
                return this.formatSchemaViewModel(response.json());
            })
            .catch((error: Response | any) => {
                let errMsg: string;
                if (error instanceof Response) {
                    const body = error.json() || '';
                    const err = body.error || JSON.stringify(body);
                    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
                } else {
                    errMsg = error.message ? error.message : error.toString();
                }
                console.error(errMsg);

                return Observable.throw(errMsg);
            });
    }

    private formatSchemaViewModel(schema: any): any {
        var objects: any[] = schema.data.__schema.types.filter((type) => {
            return type.name[0] !== "_" && type.kind === "OBJECT" && type.name !== "query";
        });

        return {
            objects: objects,
        };
    }
}
