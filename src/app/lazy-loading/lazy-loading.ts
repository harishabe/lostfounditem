import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './../auth.route.guard';

const routes: Routes = [
    { path: '', redirectTo: '/landingPage/layout', pathMatch: 'full' },
    { path: 'landingPage', loadChildren: './../landing-page/landing-page.module#LandingPageModule' },
    { path: 'dashboard', loadChildren: './../dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LazyloadingModule { }
