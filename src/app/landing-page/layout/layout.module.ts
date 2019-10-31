import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material';

import { LayoutComponent } from './../layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent
    }
];


@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [LayoutComponent]
})
export class LayoutModule { }
