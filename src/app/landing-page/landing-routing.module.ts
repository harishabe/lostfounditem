import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        children: [
            { path: '', redirectTo: 'layout', pathMatch: 'prefix' },
            { path: 'layout', loadChildren: './layout/layout.module#LayoutModule' },
            { path: 'layout/found', loadChildren: './found-something/found-something.module#FoundSomethingModule' },
            { path: 'layout/lost', loadChildren: './lost-something/lost-something.module#LostSomethingModule' },
            { path: 'layout/signUp', loadChildren: './sign-up/sign-up.module#SignUpModule' },
            { path: 'layout/signIn', loadChildren: './sign-in/sign-in.module#SignInModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
