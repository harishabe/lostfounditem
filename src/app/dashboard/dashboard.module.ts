import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';

import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [CommonModule, MaterialModule, DashboardRoutingModule],
    declarations: [NavbarComponent, DashboardComponent]
})
export class DashboardModule { }
