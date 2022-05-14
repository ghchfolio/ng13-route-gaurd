import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { VeggiesComponent } from './components/veggies/veggies.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { LoggedInGuard } from './gaurds/logged-in.guard';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FruitsComponent,
        VeggiesComponent,
        LogInComponent,
        ResourcesComponent,
        LoggedInComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [LoggedInGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
