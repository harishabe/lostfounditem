import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material';

import { ApiService } from '../../api.service';

import { LostSomethingComponent } from './../lost-something/lost-something.component';

const routes: Routes = [
    {
        path: '',
        component: LostSomethingComponent
    }
];


@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [LostSomethingComponent]
})
export class LostSomethingModule { }
