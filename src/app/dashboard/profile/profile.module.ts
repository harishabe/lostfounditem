import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material';

import { ProfileComponent } from './../profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent
    }
];


@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [ProfileComponent]
})
export class ProfileModule { }
