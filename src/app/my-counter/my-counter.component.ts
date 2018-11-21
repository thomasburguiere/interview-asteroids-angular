import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrement, Increment, Reset } from '../counter.action';
import { selectCountValue } from '../counter.selector';
import { CountState } from '../counter.reducer';

@Component({
    selector: 'app-my-counter',
    templateUrl: './my-counter.component.html',
    styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
    count$: Observable<number>;

    constructor(private store: Store<CountState>) {
        this.count$ = store.pipe(select(selectCountValue));
    }

    increment() {
        this.store.dispatch(new Increment());
    }

    decrement() {
        this.store.dispatch(new Decrement());
    }

    reset() {
        this.store.dispatch(new Reset());
    }
}
