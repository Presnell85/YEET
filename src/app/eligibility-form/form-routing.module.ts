import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPage } from './form.page';
import { IEPComponent } from '../period-cards/IEP-Page/iep-page.component';
import { NoMedicareComponent } from '../period-cards/No-Medicare-Page/no-medicare-page.component';
import { SEPComponent } from '../period-cards/SEP-Page/sep-page.component';
import { GEPComponent } from '../period-cards/GEP-Page/gep-page.component';
import { OpenEnrollmentComponent } from '../period-cards/Open-Enrollment-Page/open-enrollment-page.component';
import { RetirementComponent } from '../period-cards/Retirement-Page/retirement-page.component';
import { MAComponent } from '../period-cards/MA-Page/ma-page.component';
import { UnderwritingComponent } from '../period-cards/Underwriting-Page/underwriting-page.component';
import { GuaranteedInsuredComponent } from '../period-cards/Guaranteed-Insured-Page/guaranteed-insured-page.component';
import { ScheduleCallComponent } from '../period-cards/Schedule-Call-Page/schedule-call-page.component';

const routes: Routes = [
  {
    path: '',
    component: FormPage
  },
  {
    path: 'IEP-Page',
    component: IEPComponent
  },
  {
    path: 'No-Medicare-Page',
    component: NoMedicareComponent
  },
  {
    path: 'SEP-Page',
    component: SEPComponent
  },
  {
    path: 'GEP-Page',
    component: GEPComponent
  },
  {
    path: 'Open-Enrollment-Page',
    component: OpenEnrollmentComponent
  },
  {
    path: 'Retirement-Page',
    component: RetirementComponent
  },
  {
    path: 'MA-Page',
    component: MAComponent
  },
  {
    path: 'Underwriting-Page',
    component: UnderwritingComponent
  },
  {
    path: 'Guaranteed-Insured-Page',
    component: GuaranteedInsuredComponent
  },
  {
    path: 'Schedule-Call-Page',
    component: ScheduleCallComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPageRoutingModule {}
