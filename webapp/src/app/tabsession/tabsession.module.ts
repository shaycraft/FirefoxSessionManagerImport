import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsessionComponent } from './tabsession.component';
import { TabsessionRoutingModule } from './tabsession.routing.module';
import { TabsessionService } from './tabsession.service';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    TabsessionRoutingModule,
    MaterialModule
  ],
  declarations: [TabsessionComponent],
  providers: [
    TabsessionService
  ]
})
export class TabsessionModule { }
