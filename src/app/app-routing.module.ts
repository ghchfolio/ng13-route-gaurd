import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsComponent } from './components/fruits/fruits.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { VeggiesComponent } from './components/veggies/veggies.component';
import { LoggedInGuard } from './gaurds/logged-in.guard';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard] },
    { path: 'fruits', component: FruitsComponent, canActivate: [LoggedInGuard] },
    { path: 'veggies', component: VeggiesComponent, canActivate: [LoggedInGuard] },
    { path: 'login', component: LogInComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: LogInComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
