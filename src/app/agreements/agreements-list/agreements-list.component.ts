import { Component, OnInit } from '@angular/core';
import { Agreement } from 'src/app/shared/agreement';
import { AgreementsService } from '../agreements.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-agreements-list',
  templateUrl: './agreements-list.component.html',
  styleUrls: ['./agreements-list.component.scss']
})
export class AgreementsListComponent implements OnInit {
  public agreements: Agreement[] = [];
  agreementForm: FormGroup = this.createAgreementForm();

  constructor(private agreementsService: AgreementsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadAgreements();
    this.agreementForm = this.createAgreementForm();
  }

  private loadAgreements(): void {
    this.agreementsService
      .getAgreements()
      .subscribe((agreements: Agreement[]) => this.agreements = agreements)
  }

  onDelete(agreement: number) {
    this.agreementsService.deleteAgreement(agreement)
  }
  addAgreement(): void {
    this.agreementsService
      .addAgreement(this.agreementForm.value)
      .subscribe(() => {
        this.loadAgreements();
        this.agreementForm.reset();
      });
  }

  private createAgreementForm(): FormGroup {
    return this.formBuilder.group({
      type: ["", Validators.required],
      duration: ["", Validators.required]
    })
  }
}
