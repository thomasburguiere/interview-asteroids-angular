import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
    declarations: [AppComponent, MyCounterComponent],
    imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(appReducers)],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
