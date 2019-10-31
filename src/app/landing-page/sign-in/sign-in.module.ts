import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material';

import { SignInComponent } from './../sign-in/sign-in.component';

const routes: Routes = [
    {
        path: '',
        component: SignInComponent
    }
];


@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [SignInComponent]
})
export class SignInModule { }
