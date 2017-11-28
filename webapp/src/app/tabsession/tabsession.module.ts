import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsessionComponent } from './tabsession.component';
import { TabsessionRoutingModule } from './tabsession.routing.module';

@NgModule({
  imports: [
    CommonModule,
    TabsessionRoutingModule
  ],
  declarations: [TabsessionComponent]
})
export class TabsessionModule { }
