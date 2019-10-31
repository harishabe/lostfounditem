import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material';

import { SignUpComponent } from './../sign-up/sign-up.component';

const routes: Routes = [
    {
        path: '',
        component: SignUpComponent
    }
];


@NgModule({
    imports: [CommonModule, MaterialModule,ReactiveFormsModule, RouterModule.forChild(routes)],
    declarations: [SignUpComponent]
})
export class SignUpModule { }
