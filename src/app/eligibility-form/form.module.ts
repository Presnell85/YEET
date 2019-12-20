import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FormPage } from './form.page';
import { FormPageRoutingModule } from './form-routing.module';
import { FormFieldModule } from '../form-field-cards/form-field.module';
import { PeriodCardsModule } from '../period-cards/period-cards.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPageRoutingModule,
    FormFieldModule,
    PeriodCardsModule
  ],
  declarations: [FormPage]
})
export class EligibilityFormModule {}
