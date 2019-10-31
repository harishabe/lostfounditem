import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material';

import { AddProductComponent } from './../add-product/add-product.component';

const routes: Routes = [
    {
        path: '',
        component: AddProductComponent
    }
];


@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [AddProductComponent]
})
export class AddProductModule { }
