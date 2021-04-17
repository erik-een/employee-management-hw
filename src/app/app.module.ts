import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';
import { SharedModule } from './shared/shared.module';
import { AgreementsModule } from './agreements/agreements.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesModule,
    CoreModule,
    SharedModule,
    AgreementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
