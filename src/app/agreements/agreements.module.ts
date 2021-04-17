import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementsListComponent } from './agreements-list/agreements-list.component';
import { AgreementsService } from "./agreements.service";
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AgreementsListComponent
  ],
  providers: [AgreementsService],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [AgreementsListComponent]
})
export class AgreementsModule { }
