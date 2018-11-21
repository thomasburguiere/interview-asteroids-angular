import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCounterComponent } from './my-counter.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '../app.reducer';

describe('MyCounterComponent', () => {
    let component: MyCounterComponent;
    let fixture: ComponentFixture<MyCounterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot(appReducers)],
            declarations: [MyCounterComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyCounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
