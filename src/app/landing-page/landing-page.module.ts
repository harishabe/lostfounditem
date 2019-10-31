import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material';

import { LandingPageComponent } from './../landing-page/landing-page.component';
import { LandingRoutingModule } from './landing-routing.module';

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    }
];


@NgModule({
    imports: [CommonModule, MaterialModule, LandingRoutingModule],
    declarations: [LandingPageComponent]
})
export class LandingPageModule { }
