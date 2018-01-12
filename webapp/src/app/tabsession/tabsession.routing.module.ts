import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsessionComponent } from './tabsession.component';

const routes: Routes = [
    {
        path: '',
        component: TabsessionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsessionRoutingModule { }