import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { formComponents } from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [...formComponents],
  exports: [...formComponents],
  entryComponents: [...formComponents]
})
export class FormFieldModule {}
