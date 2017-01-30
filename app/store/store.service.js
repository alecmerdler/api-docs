import { Subject } from 'rxjs/Subject';


export class Store {

    constructor(reducers) {
        this.subject = new Subject();
        this.state = {};
        this.reducers = reducers;
    }

    dispatch(action) {
        this.reducers.forEach((reducer) => {
            console.log("ACTION:", action);
            reducer(Object.assign({}, this.state), action)
                .then((newState) => {
                    this.state = newState;
                    this.subject.next(this.state);
                });
        });
    }

    subscribe(observer) {
        return this.subject.subscribe(observer);
    }
}