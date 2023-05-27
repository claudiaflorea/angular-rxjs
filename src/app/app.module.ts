import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsUsersComponent } from './rxjs-users/rxjs-users.component';
import { RxjsBankComponent } from './rxjs-bank/rxjs-bank.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsUsersComponent,
    RxjsBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
