import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsComponent } from './components/fruits/fruits.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { VeggiesComponent } from './components/veggies/veggies.component';
import { LoggedInGuard } from './gaurds/logged-in.guard';

const routes: Routes = [
    { path: 'fruits', component: FruitsComponent, canActivate: [LoggedInGuard] },
    { path: 'veggies', component: VeggiesComponent, canActivate: [LoggedInGuard] },
    { path: 'login', component: LogInComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: FruitsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
