import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { Contacts } from '@ionic-native/contacts/ngx';

import { DashboardPage } from './dashboard.page';
import { ServicesModule } from '@services/services.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    ServicesModule
  ],
  declarations: [DashboardPage],
  providers: [Contacts]
})
export class DashboardPageModule {}
