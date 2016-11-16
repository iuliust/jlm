import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/multicast';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { Scheduler } from 'rxjs/Scheduler';
import { compose } from '@ngrx/core/compose';


let labelCache: {[label: string]: boolean} = {};

export function label<T>(etiquette: T | ''): T {
    if (labelCache[<string> etiquette]) {
        throw new Error(`Le type d'action "${etiquette}" n'est pas unique"`);
    }

    labelCache[<string>etiquette] = true;

    return <T>etiquette;
}

export interface Selector<T, V> {
    (input: Observable<T>): Observable<V>;
}

export function share<T, V>(selector: Selector<T, V>): Selector<T, V> {
    let result: Observable<V>;

    return function(input: Observable<T>) {
        if (!result) {
            result = selector(input).multicast(() => new ReplaySubject<V>(1)).refCount();
        }

        return result;
    };
}
