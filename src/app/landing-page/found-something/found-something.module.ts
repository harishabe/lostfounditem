import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material';

import { FoundSomethingComponent } from './../found-something/found-something.component';

const routes: Routes = [
    {
        path: '',
        component: FoundSomethingComponent
    }
];


@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [FoundSomethingComponent]
})
export class FoundSomethingModule { }
