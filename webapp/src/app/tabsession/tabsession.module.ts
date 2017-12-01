import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsessionComponent } from './tabsession.component';
import { TabsessionRoutingModule } from './tabsession.routing.module';
import { TabsessionService } from './tabsession.service';

@NgModule({
  imports: [
    CommonModule,
    TabsessionRoutingModule
  ],
  declarations: [TabsessionComponent],
  providers: [
    TabsessionService
  ]
})
export class TabsessionModule { }
